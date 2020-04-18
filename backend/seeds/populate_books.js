
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('book').del()
    .then(function () {
      // Inserts seed entries
      return knex('book').insert([
        {title: 'Legend', author: 'David Gemmel'},
        {title: 'Thud!', author: 'Terry Pratchett'},
        {title: 'American Gods', author: 'Neil Gaiman'},
      ]);
    });
};
