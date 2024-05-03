export const changePathtoNumber = (pathname: string) => {
    const match = pathname.match(/\/seminar\/(\d+)/);
    const seminar_id = match ? match[1] : null;

    return seminar_id;
}

export const changeOpenPathtoNumber = (pathname:string) => {
    const match = pathname.match(/\/seminar\/open\/(\d+)/);
    const seminar_id = match ? parseInt(match[1], 10) : null;

    return seminar_id;
}