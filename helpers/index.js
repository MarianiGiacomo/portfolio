const extractTechs = (data) => {
	// If it is an array, they are the skills
	if(Array.isArray(data)) {
		return data
	} else {
		const frontendTech = extractTechs(data.technologies.frontend?? [])
		const backendTech = extractTechs(data.technologies.backend?? [])
		return frontendTech.concat(backendTech)
	}
}

export const extractUniqueTech = (data) => {
	const skills = new Set()
	const addToSet = (techs) => {
		techs.forEach( t => skills.add(t))
	}
	Object.values(data).forEach( k => {
		const techs = extractTechs(k)
		addToSet(techs)
	}) 
	return skills
}
