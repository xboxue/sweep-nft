const readFileAsync = (file: File) => {
  return new Promise<string>((resolve, reject) => {
    const reader = new FileReader();

    reader.addEventListener("load", () => {
      const result = reader.result as string;
      resolve(result);
    });
    reader.addEventListener("error", reject);

    reader.readAsText(file);
  });
};

export default readFileAsync;
