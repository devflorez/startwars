export const getPeopleApi = async (page: number) => {
  try {
    const response = await fetch(
      (process.env.NEXT_PUBLIC_API_STAR_WARS as string) +
        "/people/?page=" +
        page
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
};
