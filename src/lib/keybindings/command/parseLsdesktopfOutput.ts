type DesktopEntry = { 
  title:string;
  cmd:string;
}

export default (lsdesktopfOutputLines:string[]):DesktopEntry[]=>{
  const desktopEntryIndices = lsdesktopfOutputLines
   .reduce((a, e, i) => {
    if (e.includes("[Desktop Entry]"))
      a.push(i);
    return a;
  }, []);

  const desktopEntryChunks = desktopEntryIndices
   .reduce((a, e, i) => {
     const chunk = lsdesktopfOutputLines.slice(e,(desktopEntryIndices[i+1]-1))
     a.push(chunk)
     return a
  }, []);
  
  const desktopEntries = desktopEntryChunks
    .map(( chunk:string[] ) => {
      const title = chunk
        ?.find(elem => elem.startsWith("Name="))
        ?.slice(5)
      const cmd = chunk
        ?.find(elem => elem.startsWith("Exec=") )
        ?.slice(5)
      return {title,cmd}
    })
  return desktopEntries
}
