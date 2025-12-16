import React, { useState } from 'react';
import { Download, ChevronDown, ChevronUp } from 'lucide-react';

const PhotonGravitonPaper = () => {
  const [expandedSections, setExpandedSections] = useState({});
  
  const toggleSection = (id) => {
    setExpandedSections(prev => ({...prev, [id]: !prev[id]}));
  };

  const downloadMarkdown = () => {
    const content = `# Photon and Graviton as Structural Inverses: An ArXe Analysis

**Author:** [Your Name]  
**Date:** December 2024  
**Version:** 1.0

## Abstract

Photons and gravitons share k=3, n=15 but with inverted order: T^(-1)×T^(-2) vs T^(-2)×T^(-1).
This explains spin difference, coupling hierarchy, and renormalizability.
Testable: direct gamma-gamma-graviton coupling should vanish.

## Full paper available in second artifact (pure Markdown)
`;
    
    const element = document.createElement('a');
    const file = new Blob([content], {type: 'text/markdown'});
    element.href = URL.createObjectURL(file);
    element.download = 'photon_graviton_arxe.md';
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };

  const sections = [
    { id: 'abstract', title: 'Abstract' },
    { id: 'intro', title: 'I. Introduction' },
    { id: 'photon', title: 'II. Photon Structure' },
    { id: 'graviton', title: 'III. Graviton Structure' },
    { id: 'inversion', title: 'IV. Structural Inversion' },
    { id: 'interaction', title: 'V. Interaction' },
    { id: 'qft', title: 'VI. QFT Consequences' },
    { id: 'predictions', title: 'VII. Predictions' },
    { id: 'discussion', title: 'VIII. Discussion' },
    { id: 'conclusions', title: 'IX. Conclusions' }
  ];

  const getSectionContent = (id) => {
    const contentMap = {
      abstract: `We demonstrate photons (γ) and gravitons (g) share k=3, n=15 but with inverted order:
T^(-1)×T^(-2) vs T^(-2)×T^(-1). This explains spin difference (1 vs 2), coupling hierarchy,
and renormalizability. Testable: direct γγg coupling should vanish.`,
      
      intro: `Standard approaches to EM-gravity unification focus on coupling disparity (~10^36).
We propose: difficulties arise from structural inversion, not weak coupling.
ArXe maps n-ary logics to dimensions. Previous successes: lepton masses, k↔observables.`,
      
      photon: `Structure: T^(-1)×T^(-2)
k = 3, n = 15 = 3×5 (primes → stable)
Observables: E (frequency), p (momentum), λ=±1 (helicity)
Order: Temporal→Spatial = "oscillates while propagating"`,
      
      graviton: `Structure: T^(-2)×T^(-1) (INVERTED)
k = 3, n = 15 (same as photon!)
Predicts: E, p, λ=±2 (helicity doubled)
Order: Spatial→Temporal = "curves, then oscillates"`,
      
      inversion: `Both have k=3 but inverse hierarchy:
Photon: 1 temporal + 2 spatial conditions
Graviton: 2 spatial + 1 temporal conditions

Inversion operator I: T^(k₁)×T^(k₂) → T^(k₂)×T^(k₁)`,
      
      interaction: `No direct γ-g vertex (order inversion forbids)
Only via matter: γ → T_μν → g

Explains:
- Lensing: photon follows curved geodesic ✓
- LIGO: indirect detection via metric ✓`,
      
      qft: `QED (γ): Logarithmic divergence → Renormalizable
QG (g): Quadratic divergence → Non-renormalizable

Reason: Temporal-primary vs Spatial-primary`,
      
      predictions: `1. Graviton k=3, helicity ±2 (LISA 2030s)
2. Direct γγ→g: M=0 exactly
3. Matter-mediated: M ~ 10^(-40) allowed`,
      
      discussion: `Advantages: Unified k=3, explains spin naturally
Limitations: 10^36 factor not derived
Falsifiable: Direct coupling test`,
      
      conclusions: `Photon T^(-1)×T^(-2): confirmed k=3 ↔ 3 observables
Graviton T^(-2)×T^(-1): predicts k=3, helicity ±2
Status: ✅ Photon, ⚠️ Graviton, 🔬 Testable 2030s`
    };
    return contentMap[id] || 'See full paper in Markdown artifact';
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white">
      <div className="mb-6 flex justify-between items-center border-b pb-4">
        <h1 className="text-2xl font-bold text-gray-800">
          Photon-Graviton Duality: ArXe Analysis
        </h1>
        <button
          onClick={downloadMarkdown}
          className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          <Download size={20} />
          Download
        </button>
      </div>

      <div className="prose max-w-none">
        <div className="bg-blue-50 p-4 rounded-lg mb-6">
          <p className="text-sm text-gray-700">
            <strong>Version:</strong> 1.0 | <strong>Date:</strong> December 2024
          </p>
        </div>

        <div className="bg-gray-50 p-6 rounded-lg mb-6">
          <h2 className="text-xl font-semibold mb-3">Key Results</h2>
          <ul className="space-y-2 text-sm">
            <li>✅ <strong>Photon:</strong> T^(-1)×T^(-2), k=3, n=15</li>
            <li>⚠️ <strong>Graviton:</strong> T^(-2)×T^(-1), k=3, n=15</li>
            <li>🔬 <strong>Test:</strong> Direct γγ→g should vanish</li>
          </ul>
        </div>

        <div className="space-y-4">
          {sections.map(section => (
            <div key={section.id} className="border rounded-lg">
              <button
                onClick={() => toggleSection(section.id)}
                className="w-full p-4 flex justify-between items-center hover:bg-gray-50"
              >
                <span className="font-semibold text-lg">{section.title}</span>
                {expandedSections[section.id] ? <ChevronUp /> : <ChevronDown />}
              </button>
              {expandedSections[section.id] && (
                <div className="p-4 border-t bg-gray-50">
                  <pre className="whitespace-pre-wrap text-sm">
                    {getSectionContent(section.id)}
                  </pre>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-6 p-4 bg-green-50 rounded-lg">
          <p className="text-sm text-gray-700">
            📄 Full paper available in the second artifact (pure Markdown)
          </p>
        </div>
      </div>
    </div>
  );
};

export default PhotonGravitonPaper;