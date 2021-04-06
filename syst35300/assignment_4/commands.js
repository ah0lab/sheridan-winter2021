
// 2.
db.shop.updateMany(
    {borough:'Queens'},
    {$set:{'owner': 'Ben Ahola'}},
    {upsert:true}
)

// 3.
db.shop.insertMany([
    {
        _id: 10004,
        address: {
            building: '321-67',
            coord: [69.53239, -84.49619],
            street: '123 Fake Avenue',
            zipcode: '23555'
        },
        borough: 'Brampton',
        cuisine: 'Canadian',
        grades: [
            {
                date: new ISODate('2011-08-06'),
                grade: 'A',
                score: 10
            },
            {
                date: new ISODate('2012-05-01'),
                grade: 'B',
                score: 7
            }
        ],
        name: 'Foo\'s Canadian Cooking',
        owner: 'Ben Ahola',
        restaurant_id: 41000003
    },
    {
        _id: 10005,
        address: {
            building: '123-76',
            coord: [-26.51445, 60.50443],
            street: '321 Fake Cres',
            zipcode: '55532'
        },
        borough: 'Queens',
        cuisine: 'Finnish',
        grades: [
            {
                date: new ISODate('2020-06-08'),
                grade: 'A',
                score: 20
            },
            {
                date: new ISODate('2021-01-05'),
                grade: 'A',
                score: 25
            }
        ],
        name: 'Baz\'s chicken waffle',
        owner: 'Ben Ahola',
        restaurant_id: 41000004
    },
    {
        _id: 10006,
        address: {
            building: '673-21',
            coord: [61.71675, 87.08888],
            street: '123 Phony Street',
            zipcode: '35255'
        },
        borough: 'Brampton',
        cuisine: 'Indian',
        grades: [
            {
                date: new ISODate('2019-05-05'),
                grade: 'A',
                score: 17
            },
            {
                date: new ISODate('2006-09-03'),
                grade: 'C',
                score: 5
            }
        ],
        name: 'Bar and Grill\'s Bar and Grill',
        owner: 'Ben Ahola',
        restaurant_id: 41000005
    }
])

// 4.
db.shop.find({owner:'Ben Ahola'})

// 5.
db.shop.find({
    owner:'Ben Ahola',
    cuisine: {$in: ['Brazilian', 'Chicken', 'Steal']}
})
