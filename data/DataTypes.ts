export type Project = {
  img?: {
		width: number,
		height: number,
		src: string,
		alt: string
	},
	short: string,
	title: string,
	intro: string,
	technologies: {
		frontend?: string[],
		backend?: string[]
	},
	links: {
		[key: string]: string
	}
}

export type Publication = {
	title: string,
	url: URL
}