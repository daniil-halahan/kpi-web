function createGlitch(glitchInfo) {
	const span1 = document.createElement('span');
	span1.textContent = glitchInfo.text;
	span1.style.animationDuration = `${glitchInfo.duration * 0.69}ms`;
	const span2 = document.createElement('span');
	span2.textContent = glitchInfo.text;
	span2.style.animationDuration = `${glitchInfo.duration * 0.52}ms`;
	const glitchWrapper = document.createElement('div');
	glitchWrapper.className = 'glitch';
	glitchWrapper.textContent = glitchInfo.text;
	glitchWrapper.style.color = glitchInfo.color;
	glitchWrapper.style.fontSize = `${glitchInfo.fontSize}px`;
	glitchWrapper.style.animationDuration = `${glitchInfo.duration}ms`;
	glitchWrapper.appendChild(span1);
	glitchWrapper.appendChild(span2);
	return glitchWrapper;
}