function buildImagePrompt({ description, style, variation }) {
  const basePrompt =
    'High quality, professional illustration, realistic lighting, detailed composition.';

  const styleMap = {
    realistic: 'Photorealistic style.',
    cyberpunk: 'Cyberpunk style, neon lights, futuristic environment.',
    watercolor: 'Watercolor painting style.',
    minimalist: 'Minimalist and clean composition.'
  };

  const variationMap = {
    standard: 'Standard detail level.',
    'high-detail': 'Highly detailed, sharp focus, intricate elements.',
    artistic: 'Artistic interpretation with creative freedom.'
  };

  const stylePrompt = styleMap[style] || styleMap.realistic;
  const variationPrompt = variationMap[variation] || variationMap.standard;

  return `${basePrompt} ${stylePrompt} ${variationPrompt} Scene: ${description}`;
}

module.exports = { buildImagePrompt };
