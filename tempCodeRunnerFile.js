  console.log(listModel);
  listModel.findOneAndUpdate(
    {
      _id: listid,
    },
    {
      $pull: {
        tasks: {
          _id: "6178525dfcf9ce7dfa7bddf9",
        },
      },
    }
  );