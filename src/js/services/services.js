const getResourse = async (url) => {
    const res = await fetch(url);
    if (!res.ok) {
       throw Error (`Cold not fetch ${url}, status: ${res.status}`);
    }
    return await res.json();
}
export {getResourse};