conn = Mongo()
db = conn.getDB('profile')

db.profile.updateOne(
    {firstName: "John" },
    {
        $set: { 
            status: 
            {
                gpa: 4.0,
                year: 3,
                semester: 1
            }
        }
    }
);

cursor = db.collection.find();
while(cursor.hasNext()) {
    printjson(cursor.next());
}