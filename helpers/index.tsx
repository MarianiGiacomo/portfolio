import { DataType, Project } from '../data/DataTypes';

const extractTechs = (projectData: Project | string[]): string[] => {
  // If it is an array, we have reached the skills
  if (Array.isArray(projectData)) {
    return projectData;
  } else {
    const frontendTech = extractTechs(projectData.technologies.frontend ?? []);
    const backendTech = extractTechs(projectData.technologies.backend ?? []);
    return frontendTech.concat(backendTech);
  }
};

export const extractUniqueTech = (
  projects: DataType['projects'],
): Set<string> => {
  const skills = new Set<string>();
  const addToSet = (techs: string[]) => {
    techs.forEach((t) => skills.add(t));
  };
  Object.values(projects).forEach((k) => {
    const techs = extractTechs(k);
    addToSet(techs);
  });
  return skills;
};

export const boldName = (
  text: string,
  firstName: string,
  lastName: string,
): React.ReactElement | string => {
  if (text.includes(`${firstName} ${lastName}`)) {
    return (
      <>
        {text.split(`${firstName} ${lastName}`)[0]}{' '}
        <b>{`${firstName} ${lastName}`}</b>{' '}
        {text.split(`${firstName} ${lastName}`)[1]}
      </>
    );
  } else if (text.includes(`${lastName} ${firstName}`)) {
    return (
      <>
        {text.split(`${lastName} ${firstName}`)[0]}{' '}
        <b>{`${lastName} ${firstName}`}</b>{' '}
        {text.split(`${lastName} ${firstName}`)[1]}
      </>
    );
  } else if (text.includes(`${firstName}, ${lastName}`)) {
    return (
      <>
        {text.split(`${firstName}, ${lastName}`)[0]}{' '}
        <b>{`${firstName}, ${lastName}`}</b>{' '}
        {text.split(`${firstName}, ${lastName}`)[1]}
      </>
    );
  } else if (text.includes(`${lastName}, ${firstName}`)) {
    return (
      <>
        {text.split(`${lastName}, ${firstName}`)[0]}{' '}
        <b>{`${lastName}, ${firstName}`}</b>{' '}
        {text.split(`${lastName}, ${firstName}`)[1]}
      </>
    );
  } else {
    return text;
  }
};

export const underscoreToHyphen = (text: string): string => {
  return text.replace(/_/g, '-');
};

export const underscoreToWhiteSpace = (text: string): string => {
  return text.replace(/_/g, ' ');
};
