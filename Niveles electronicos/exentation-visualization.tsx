import React, { useState, useMemo } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Atom, Layers, Zap, Target, Grid3x3, Eye } from 'lucide-react';

const ExentationVisualization = () => {
  const [selectedOrbital, setSelectedOrbital] = useState({ n: 3, l: 1 });
  const [viewMode, setViewMode] = useState('hierarchy');
  const [highlightLevel, setHighlightLevel] = useState(null);

  // Orbital data structure
  const orbitals = useMemo(() => {
    const data = [];
    for (let n = 1; n <= 7; n++) {
      for (let l = 0; l < n && l <= 3; l++) {
        const nPlusL = n + l;
        const nE = 4 + l;
        const orbitalName = ['s', 'p', 'd', 'f'][l];
        data.push({
          n,
          l,
          name: `${n}${orbitalName}`,
          nPlusL,
          nE_angular: nE,
          nE_total: n + l + 4,
          phases: 2 * l + 1,
          angularNodes: l,
          radialNodes: n - l - 1,
          curvature: l * (l + 1),
          color: ['#3b82f6', '#10b981', '#f59e0b', '#ef4444'][l],
          arxeLevel: ['T²', 'T⁻²', 'T³', 'T⁻³'][l]
        });
      }
    }
    return data.sort((a, b) => {
      if (a.nPlusL !== b.nPlusL) return a.nPlusL - b.nPlusL;
      return b.n - a.n;
    });
  }, []);

  // Group by n+l for Madelung view
  const madelungGroups = useMemo(() => {
    const groups = {};
    orbitals.forEach(orb => {
      if (!groups[orb.nPlusL]) groups[orb.nPlusL] = [];
      groups[orb.nPlusL].push(orb);
    });
    return groups;
  }, [orbitals]);

  // Periodic table structure
  const periodicData = useMemo(() => {
    const periods = [
      { n: 1, orbitals: ['1s'] },
      { n: 2, orbitals: ['2s', '2p'] },
      { n: 3, orbitals: ['3s', '3p'] },
      { n: 4, orbitals: ['4s', '3d', '4p'] },
      { n: 5, orbitals: ['5s', '4d', '5p'] },
      { n: 6, orbitals: ['6s', '4f', '5d', '6p'] },
      { n: 7, orbitals: ['7s', '5f', '6d', '7p'] }
    ];
    return periods;
  }, []);

  const selected = orbitals.find(o => o.n === selectedOrbital.n && o.l === selectedOrbital.l);

  // Render nodal structure
  const renderNodes = (orbital) => {
    const angularNodes = [];
    const radialNodes = [];
    
    for (let i = 0; i < orbital.angularNodes; i++) {
      angularNodes.push(
        <div key={`ang-${i}`} className="flex items-center gap-2 text-sm">
          <div className="w-2 h-2 bg-red-500 rounded-full"></div>
          <span>Angular node {i + 1}</span>
        </div>
      );
    }
    
    for (let i = 0; i < orbital.radialNodes; i++) {
      radialNodes.push(
        <div key={`rad-${i}`} className="flex items-center gap-2 text-sm">
          <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
          <span>Radial node {i + 1}</span>
        </div>
      );
    }
    
    return { angularNodes, radialNodes };
  };

  // Render orbital shape
  const renderOrbitalShape = (l) => {
    if (l === 0) {
      return (
        <div className="relative w-32 h-32 mx-auto">
          <div className="absolute inset-0 rounded-full bg-blue-400 opacity-30 animate-pulse"></div>
          <div className="absolute inset-4 rounded-full bg-blue-500 opacity-50"></div>
          <div className="absolute inset-8 rounded-full bg-blue-600 opacity-70"></div>
        </div>
      );
    } else if (l === 1) {
      return (
        <div className="relative w-32 h-32 mx-auto">
          <div className="absolute left-0 top-1/2 -translate-y-1/2 w-14 h-20 rounded-full bg-green-400 opacity-60"></div>
          <div className="absolute right-0 top-1/2 -translate-y-1/2 w-14 h-20 rounded-full bg-green-400 opacity-60"></div>
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-0.5 h-full bg-red-500"></div>
        </div>
      );
    } else if (l === 2) {
      return (
        <div className="relative w-32 h-32 mx-auto">
          <div className="absolute top-0 left-1/4 w-12 h-12 rounded-full bg-orange-400 opacity-50"></div>
          <div className="absolute top-0 right-1/4 w-12 h-12 rounded-full bg-orange-400 opacity-50"></div>
          <div className="absolute bottom-0 left-1/4 w-12 h-12 rounded-full bg-orange-400 opacity-50"></div>
          <div className="absolute bottom-0 right-1/4 w-12 h-12 rounded-full bg-orange-400 opacity-50"></div>
          <div className="absolute left-1/2 -translate-x-1/2 w-0.5 h-full bg-red-500"></div>
          <div className="absolute top-1/2 -translate-y-1/2 w-full h-0.5 bg-red-500"></div>
        </div>
      );
    } else {
      return (
        <div className="relative w-32 h-32 mx-auto">
          <div className="text-center text-red-400 text-4xl font-bold leading-[128px]">f</div>
          <div className="absolute inset-0 border-2 border-red-400 rounded-lg opacity-30"></div>
        </div>
      );
    }
  };

  return (
    <div className="w-full max-w-7xl mx-auto p-4 space-y-4">
      {/* Header */}
      <Card className="bg-gradient-to-r from-blue-50 to-purple-50">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-2xl">
            <Atom className="w-8 h-8" />
            Interactive Exentation Hierarchy: Orbital Structure
          </CardTitle>
          <p className="text-sm text-gray-600 mt-2">
            Explore how quantum numbers (n, ℓ) map to ArXe exentation levels and Madelung ordering
          </p>
        </CardHeader>
      </Card>

      {/* View Mode Selector */}
      <div className="flex gap-2 flex-wrap">
        <button
          onClick={() => setViewMode('hierarchy')}
          className={`px-4 py-2 rounded-lg flex items-center gap-2 ${
            viewMode === 'hierarchy' ? 'bg-blue-500 text-white' : 'bg-gray-200'
          }`}
        >
          <Layers className="w-4 h-4" />
          Exentation Hierarchy
        </button>
        <button
          onClick={() => setViewMode('madelung')}
          className={`px-4 py-2 rounded-lg flex items-center gap-2 ${
            viewMode === 'madelung' ? 'bg-green-500 text-white' : 'bg-gray-200'
          }`}
        >
          <Zap className="w-4 h-4" />
          Madelung Ordering
        </button>
        <button
          onClick={() => setViewMode('periodic')}
          className={`px-4 py-2 rounded-lg flex items-center gap-2 ${
            viewMode === 'periodic' ? 'bg-purple-500 text-white' : 'bg-gray-200'
          }`}
        >
          <Grid3x3 className="w-4 h-4" />
          Periodic Table View
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        {/* Main Visualization Panel */}
        <div className="lg:col-span-2">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Eye className="w-5 h-5" />
                {viewMode === 'hierarchy' && 'Exentation Level Structure'}
                {viewMode === 'madelung' && 'Madelung (n+ℓ) Groups'}
                {viewMode === 'periodic' && 'Periodic Table Mapping'}
              </CardTitle>
            </CardHeader>
            <CardContent>
              {viewMode === 'hierarchy' && (
                <div className="space-y-6">
                  {[0, 1, 2, 3].map(l => {
                    const levelOrbitals = orbitals.filter(o => o.l === l);
                    const levelColor = ['blue', 'green', 'orange', 'red'][l];
                    const levelName = ['s', 'p', 'd', 'f'][l];
                    const arxeLevel = ['T²', 'T⁻²', 'T³', 'T⁻³'][l];
                    const logic = ['Unary', 'Binary', 'Ternary', 'Quaternary'][l];
                    
                    return (
                      <div key={l} className={`p-4 rounded-lg border-2 border-${levelColor}-300 bg-${levelColor}-50`}>
                        <div className="flex items-center justify-between mb-3">
                          <div>
                            <h3 className="font-bold text-lg">ℓ = {l} ({levelName}-orbitals)</h3>
                            <p className="text-sm text-gray-600">
                              n_E = {4 + l} | {arxeLevel} | {logic} Logic | {2*l+1} phases
                            </p>
                          </div>
                          <div className="text-right">
                            <div className="text-xs text-gray-500">Angular nodes: {l}</div>
                            <div className="text-xs text-gray-500">Curvature: ℓ(ℓ+1) = {l*(l+1)}</div>
                          </div>
                        </div>
                        <div className="flex gap-2 flex-wrap">
                          {levelOrbitals.slice(0, 7).map(orb => (
                            <button
                              key={orb.name}
                              onClick={() => setSelectedOrbital({ n: orb.n, l: orb.l })}
                              className={`px-3 py-1 rounded border-2 transition-all ${
                                selected?.name === orb.name
                                  ? `border-${levelColor}-600 bg-${levelColor}-200 font-bold`
                                  : `border-${levelColor}-300 hover:bg-${levelColor}-100`
                              }`}
                            >
                              {orb.name}
                            </button>
                          ))}
                        </div>
                      </div>
                    );
                  })}
                </div>
              )}

              {viewMode === 'madelung' && (
                <div className="space-y-4">
                  {Object.entries(madelungGroups).slice(0, 10).map(([nPlusL, group]) => (
                    <div key={nPlusL} className="p-4 rounded-lg border-2 border-gray-300 bg-gray-50">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="font-bold">n + ℓ = {nPlusL}</h3>
                        <span className="text-sm text-gray-600">
                          Energy Level {nPlusL}
                        </span>
                      </div>
                      <div className="flex gap-2 items-center flex-wrap">
                        <span className="text-sm text-gray-600">Order:</span>
                        {group.map((orb, idx) => (
                          <React.Fragment key={orb.name}>
                            <button
                              onClick={() => setSelectedOrbital({ n: orb.n, l: orb.l })}
                              className={`px-3 py-1 rounded border-2 transition-all ${
                                selected?.name === orb.name
                                  ? 'border-blue-600 bg-blue-200 font-bold'
                                  : 'border-gray-400 hover:bg-gray-100'
                              }`}
                              style={{ borderColor: orb.color }}
                            >
                              {orb.name}
                              <span className="text-xs ml-1">(n={orb.n})</span>
                            </button>
                            {idx < group.length - 1 && (
                              <span className="text-gray-400">→</span>
                            )}
                          </React.Fragment>
                        ))}
                      </div>
                    </div>
                  ))}
                  <div className="text-sm text-gray-600 italic mt-4">
                    * Within each (n+ℓ) group, larger n fills first (Madelung's rule)
                  </div>
                </div>
              )}

              {viewMode === 'periodic' && (
                <div className="space-y-3">
                  {periodicData.map(period => (
                    <div key={period.n} className="p-3 rounded-lg border-2 border-purple-300 bg-purple-50">
                      <div className="flex items-start gap-4">
                        <div className="font-bold text-lg min-w-[60px]">
                          Period {period.n}
                        </div>
                        <div className="flex gap-2 flex-wrap flex-1">
                          {period.orbitals.map(orbName => {
                            const orb = orbitals.find(o => o.name === orbName);
                            if (!orb) return null;
                            return (
                              <button
                                key={orbName}
                                onClick={() => setSelectedOrbital({ n: orb.n, l: orb.l })}
                                className={`px-3 py-1 rounded border-2 transition-all ${
                                  selected?.name === orb.name
                                    ? 'border-purple-600 bg-purple-200 font-bold'
                                    : 'border-purple-300 hover:bg-purple-100'
                                }`}
                                style={{ borderColor: orb.color }}
                              >
                                {orb.name}
                              </button>
                            );
                          })}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </CardContent>
          </Card>
        </div>

        {/* Detail Panel */}
        <div className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Target className="w-5 h-5" />
                Selected: {selected?.name}
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {/* Orbital Shape */}
              <div>
                <h4 className="font-semibold mb-2 text-center">Orbital Shape</h4>
                {renderOrbitalShape(selected.l)}
              </div>

              {/* Quantum Numbers */}
              <div className="p-3 bg-gray-100 rounded-lg">
                <h4 className="font-semibold mb-2">Quantum Numbers</h4>
                <div className="space-y-1 text-sm">
                  <div className="flex justify-between">
                    <span>Principal (n):</span>
                    <span className="font-mono">{selected.n}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Angular (ℓ):</span>
                    <span className="font-mono">{selected.l}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>n + ℓ:</span>
                    <span className="font-mono font-bold">{selected.nPlusL}</span>
                  </div>
                </div>
              </div>

              {/* ArXe Structure */}
              <div className="p-3 bg-blue-100 rounded-lg">
                <h4 className="font-semibold mb-2">ArXe Structure</h4>
                <div className="space-y-1 text-sm">
                  <div className="flex justify-between">
                    <span>ArXe Level:</span>
                    <span className="font-mono font-bold">{selected.arxeLevel}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>n_E (angular):</span>
                    <span className="font-mono">{selected.nE_angular}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>n_E (total):</span>
                    <span className="font-mono">{selected.nE_total}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Isomorphic Phases:</span>
                    <span className="font-mono">{selected.phases}</span>
                  </div>
                </div>
              </div>

              {/* Nodal Structure */}
              <div className="p-3 bg-red-50 rounded-lg">
                <h4 className="font-semibold mb-2">Nodal Structure</h4>
                <div className="space-y-2">
                  <div>
                    <div className="text-sm font-medium mb-1">Angular Nodes: {selected.angularNodes}</div>
                    {renderNodes(selected).angularNodes}
                  </div>
                  <div>
                    <div className="text-sm font-medium mb-1">Radial Nodes: {selected.radialNodes}</div>
                    {renderNodes(selected).radialNodes}
                  </div>
                  <div className="text-xs text-gray-600 mt-2">
                    Total nodes: {selected.angularNodes + selected.radialNodes}
                  </div>
                </div>
              </div>

              {/* Curvature */}
              <div className="p-3 bg-green-50 rounded-lg">
                <h4 className="font-semibold mb-2">Angular Curvature</h4>
                <div className="text-sm space-y-1">
                  <div className="flex justify-between">
                    <span>ℓ(ℓ+1):</span>
                    <span className="font-mono font-bold">{selected.curvature}</span>
                  </div>
                  <div className="text-xs text-gray-600 mt-2">
                    Eigenvalue of L² operator (in ℏ² units)
                  </div>
                </div>
              </div>

              {/* Energy Ordering */}
              <div className="p-3 bg-yellow-50 rounded-lg">
                <h4 className="font-semibold mb-2">Energy Ordering</h4>
                <div className="text-sm space-y-1">
                  <div>Primary: n+ℓ = <span className="font-bold">{selected.nPlusL}</span></div>
                  <div>Secondary: n = <span className="font-bold">{selected.n}</span></div>
                  <div className="text-xs text-gray-600 mt-2">
                    Lower (n+ℓ) fills first; for equal (n+ℓ), higher n fills first
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Key Equations */}
      <Card className="bg-gradient-to-r from-gray-50 to-blue-50">
        <CardHeader>
          <CardTitle className="text-lg">Key ArXe-Quantum Correspondences</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
            <div className="p-3 bg-white rounded border">
              <div className="font-mono font-bold mb-1">n_E(angular) = 4 + ℓ</div>
              <div className="text-xs text-gray-600">Angular exentation from spatial base T²</div>
            </div>
            <div className="p-3 bg-white rounded border">
              <div className="font-mono font-bold mb-1">N_phases = 2ℓ + 1</div>
              <div className="text-xs text-gray-600">Isomorphic phase count (SO(3) dimension)</div>
            </div>
            <div className="p-3 bg-white rounded border">
              <div className="font-mono font-bold mb-1">Curvature = ℓ(ℓ+1)</div>
              <div className="text-xs text-gray-600">Angular curvature (L² eigenvalue)</div>
            </div>
            <div className="p-3 bg-white rounded border">
              <div className="font-mono font-bold mb-1">E ∝ (n + ℓ)</div>
              <div className="text-xs text-gray-600">Madelung energy ordering principle</div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ExentationVisualization;