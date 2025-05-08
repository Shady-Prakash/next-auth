

export const getUserInitials = ({name = ' '}) => {
  const splitUserName = name?.split(' ') || ' ';
  const firstName = splitUserName?.at(0) || ' ';
  const lastName = splitUserName?.at(-1) || ' ';
  const firstNameInitial = firstName?.at(0)?.toUpperCase() || ' ';
  const lastNameInitial = lastName?.at(0)?.toUpperCase() || ' ';

  return firstNameInitial + lastNameInitial
}