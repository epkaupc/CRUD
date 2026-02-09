const USER_ID = "90a2d637-8d2f-4c51-813c-cb8401aad7e5";

useEffect(() => {
  async function loadBookmarks() {
    const { data, error } = await supabase
      .from("bookmarks")
      .select("id, title, url")
      .eq("user_id", USER_ID);

    if (!error) setBookmarks(data);
  }

  loadBookmarks()
  ;
}, []);



export default supabase;



