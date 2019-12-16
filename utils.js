module.exports.paginateCollection = function paginateCollection(collection) {
  const PER_PAGE = 10;
  const log = msg => {
    console.log(msg);
  };

  return (page, perPage) => {
    page = Number(page);
    const pageCount = Math.ceil(collection.length / perPage);

    //   invalid page, return the first page
    if (!page) {
      log(`invalid page, page is reset to 1`);
      page = 1;
    }

    //   pages over the last page, return the last page
    if (page > pageCount) {
      log(
        `page over the last page, page is reset to the last page ${pageCount}`
      );
      page = pageCount;
    }
    return {
      page,
      total: collection.length,
      movies: collection.slice(page * perPage - perPage, page * perPage)
    };
  };
};
