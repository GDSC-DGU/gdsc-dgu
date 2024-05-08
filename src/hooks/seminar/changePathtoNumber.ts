
// path 'seminar/${seminar.id} 중 seminar.id만 반환
export const changePathtoSeperate = (pathname: string, value: string) => {
    // URL에서 '/seminar/' 다음에 오는 부분을 추출하여 직접 반환
    const basePath = `/${value}/`;
    const start = pathname.indexOf(basePath) + basePath.length;
    const seminarId = pathname.substring(start); // 이 부분이 바로 seminarId

    return seminarId; // 추출된 seminarId 반환
  }