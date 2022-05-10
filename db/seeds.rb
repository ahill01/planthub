##Plant Category

puts("Seeding Plant Categories")

PlantCategory.create(category:"Herbs",water_amount:1,water_frequency:7,sun_needs:"Full Sun")

PlantCategory.create(category:"Cacti/Succulents",water_amount:4,water_frequency:14,sun_needs:"Full Sun")

PlantCategory.create(category:"Flowering",water_amount:1,water_frequency:7,sun_needs:"Partial Sun/Shade")


PlantCategory.create(category:"Foliage",water_amount:1,water_frequency:7,sun_needs:"Full Sun")


PlantCategory.create(category:"Vegetable/Fruit",water_amount:1,water_frequency:7,sun_needs:"Full Sun")

puts("Seeding Demo User Accounts")
User.create(fname:"Test", lname:"User",username:"TestUser",password:"password")

User.create(fname:"Demo", lname:"User",username:"DemoUser",password:"1234")

puts("Seeding Test User Plants")

Plant.create(name:"Joe",planted_date:Time.now(),outside:false,plant_category_id:1,picture:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzB1qSjKUXt5fTtyF-3d65RTPHZU4sFfBVqsPrG2Bvxbz-5NZBljW5zYuCNvfJeTi-cDY&usqp=CAU",plant_type:"spiderplant",user_id:1)

Plant.create(name:"Jerry",planted_date:Time.now(),outside:true,plant_category_id:5,picture:"https://watchandlearn.scholastic.com/content/dam/classroom-magazines/watchandlearn/videos/animals-and-plants/plants/what-are-plants-/What-Are-Plants.jpg",plant_type:"dicot",user_id:1)

Plant.create(name:"Susan",planted_date:Time.now(),outside:false,plant_category_id:3,picture:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzGdg_w1li92i1NvvuDwGhqK93f28zWpMRBLr_m7GMH0QgXldNhQZ7dHJ2cGy--sGYBg0&usqp=CAU",plant_type:"houseplant",user_id:1)

Plant.create(name:"Trinity",planted_date:Time.now(),outside:false,plant_category_id:4,picture:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzGdg_w1li92i1NvvuDwGhqK93f28zWpMRBLr_m7GMH0QgXldNhQZ7dHJ2cGy--sGYBg0&usqp=CAU",plant_type:"waterlily",user_id:1)