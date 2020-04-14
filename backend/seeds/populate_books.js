
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('book').del()
    .then(function () {
      // Inserts seed entries
      return knex('book').insert([
        {id: 1, title: 'Legend', author: 'David Gemmel'},
        {id: 2, title: 'Thud!', author: 'Terry Pratchett'},
        {id: 3, title: 'American Gods', author: 'Neil Gaiman'},
      ]);
    });
};
