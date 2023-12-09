import React from "react";

const blogs = () => {
  return (
    <div className="admin-blogs-wrapper">
      <div className="admin-blogs-add">
        <h1>Here you can add blogs</h1>
        <form type="submit">
          <label>Title</label>
          <input type="text" placeholder="Enter the Blog's title" />
          <label>Writer's name</label>
          <input type="text" placeholder="Enter the writer's name " />
          <label>Date</label>
          <input type="text" placeholder=" Enter the Date" />
          <label>Category</label>
          <input type="text" placeholder="Enter the Category of blog" />
          <label>Keywords</label>
          <input type="text" placeholder="Enter the Keywords for blog" />
          <label>Description 1 title</label>
          <input type="text" placeholder="Enter the Description 1 title" />
          <label>Description 1</label>
          <input type="text" placeholder="Enter the Description 1" />
          <label>Description 2 title</label>
          <input type="text" placeholder="Enter the Description 2 title" />
          <label>Description 2</label>
          <input type="text" placeholder="Enter the Description 2" />
          <label>Description 3 title</label>
          <input type="text" placeholder="Enter the Description 3 title" />
          <label>Description 3</label>
          <input type="text" placeholder="Enter the Description 3" />
          <label>Description 4 title</label>
          <input type="text" placeholder="Enter the Description 4 title" />
          <label>Description 4</label>
          <input type="text" placeholder="Enter the Description 4" />
          <label>Description 5 title</label>
          <input type="text" placeholder="Enter the Description 5 title" />
          <label>Description 5</label>
          <input type="text" placeholder="Enter the Description 5" />
          <label>Description 6 title</label>
          <input type="text" placeholder="Enter the Description 6 title" />
          <label>Description 6</label>
          <input type="text" placeholder="Enter the Description 6" />
          <label>Conclusion</label>
          <input type="text" placeholder="Enter the conclusion of the blog" />
          <label>Blogs Wallpaper</label>
          <input type="file" placeholder="Blog Walpaper" accept="image/*" />
          <input
            type="submit"
            placeholder="Submit"
            className="blogs-add-submit-btn"
          />
        </form>
      </div>
      <div className="admin-blogs-delete">
        <h1>You can delete blogs from here.</h1>
        <form type="submit">
          <label>Title</label>
          <input type="text" placeholder="Enter the title of the blog" />
          <label>Writer</label>
          <input type="text" placeholder="Enter the name of the writer" />
          <input
            type="submit"
            className="blogs-add-submit-btn"
            placeholder="Submit"
          />
        </form>
      </div>
    </div>
  );
};

export default blogs;
