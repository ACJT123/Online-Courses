import Course from "./Components/Course";

export default function Index() {

    const courses = [
        {
          "title": "JavaScript Programming",
          "instructor": "John Doe",
          "duration": "6 weeks",
          "price": "$99",
          "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZ0qR1YJH1BCQnWJBCpd3TBW53q_S64dc-gA&usqp=CAU",
          "rating": 4.5,
          "lessons": [
            { "title": "Introduction to JavaScript", "duration": 30 },
            { "title": "Arrays and Loops", "duration": 45 },
            { "title": "Functions and Scope", "duration": 60 },
            { "title": "Objects and Classes", "duration": 55 }
          ]
        },
        {
          "title": "Python for Beginners",
          "instructor": "Jane Smith",
          "duration": "8 weeks",
          "price": "$120",
          "image": "https://kajabi-storefronts-production.kajabi-cdn.com/kajabi-storefronts-production/themes/3771918/settings_images/Btsvy53TYWWNbk7x4FAj_file.jpg",
          "rating": 4.2,
          "lessons": [
            { "title": "Python Basics", "duration": 40 },
            { "title": "Conditional Statements", "duration": 50 },
            { "title": "Functions and Modules", "duration": 55 },
            { "title": "Object-Oriented Python", "duration": 60 }
          ]
        },
        {
          "title": "Web Development Bootcamp",
          "instructor": "Alex Johnson",
          "duration": "10 weeks",
          "price": "$199",
          "image": "https://kajabi-storefronts-production.kajabi-cdn.com/kajabi-storefronts-production/themes/3771918/settings_images/UCHtMLk7Te25OdY9ps7f_file.jpg",
          "rating": 4.7,
          "lessons": [
            { "title": "HTML & CSS Fundamentals", "duration": 60 },
            { "title": "JavaScript Essentials", "duration": 70 },
            { "title": "Backend with Node.js", "duration": 80 },
            { "title": "Database Management", "duration": 75 }
          ]
        },
        {
          "title": "Data Science Fundamentals",
          "instructor": "Ella Adams",
          "duration": "12 weeks",
          "price": "$150",
          "image": "https://elysiumacademy.org/wp-content/uploads/2018/12/REACT-JS.jpg",
          "rating": 4.9,
          "lessons": [
            { "title": "Data Analysis with Pandas", "duration": 65 },
            { "title": "Machine Learning Basics", "duration": 75 },
            { "title": "Data Visualization", "duration": 70 },
            { "title": "Big Data Handling", "duration": 80 }
          ]
        },
        {
          "title": "Mobile App Development",
          "instructor": "Max Carter",
          "duration": "8 weeks",
          "price": "$180",
          "image": "https://trisectinstitute.com/wp-content/uploads/2021/12/best-react-js-training-institute-1.png",
          "rating": 4.6,
          "lessons": [
            { "title": "App Design Principles", "duration": 50 },
            { "title": "iOS Development", "duration": 70 },
            { "title": "Android Development", "duration": 65 },
            { "title": "Testing and Deployment", "duration": 60 }
          ]
        },
        {
          "title": "Digital Marketing Masterclass",
          "instructor": "Sophia Brown",
          "duration": "6 weeks",
          "price": "$149",
          "image": "https://kajabi-storefronts-production.kajabi-cdn.com/kajabi-storefronts-production/themes/3771918/settings_images/Btsvy53TYWWNbk7x4FAj_file.jpg",
          "rating": 4.4,
          "lessons": [
            { "title": "SEO and SEM Strategies", "duration": 45 },
            { "title": "Social Media Marketing", "duration": 55 },
            { "title": "Content Marketing", "duration": 60 },
            { "title": "Email Marketing Techniques", "duration": 50 }
          ]
        },
        {
          "title": "Ethical Hacking Basics",
          "instructor": "William Green",
          "duration": "8 weeks",
          "price": "$199",
          "image": "https://elysiumacademy.org/wp-content/uploads/2018/12/REACT-JS.jpg",
          "rating": 4.8,
          "lessons": [
            { "title": "Introduction to Cybersecurity", "duration": 55 },
            { "title": "Network Security Fundamentals", "duration": 70 },
            { "title": "Penetration Testing", "duration": 75 },
            { "title": "Ethical Hacking Tools", "duration": 60 }
          ]
        },
        {
          "title": "Graphic Design Essentials",
          "instructor": "Olivia White",
          "duration": "6 weeks",
          "price": "$129",
          "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZ0qR1YJH1BCQnWJBCpd3TBW53q_S64dc-gA&usqp=CAU",
          "rating": 4.3,
          "lessons": [
            { "title": "Fundamentals of Design", "duration": 50 },
            { "title": "Typography and Layout", "duration": 65 },
            { "title": "Adobe Creative Suite", "duration": 75 },
            { "title": "Logo and Branding Design", "duration": 55 }
          ]
        },
        {
          "title": "Business Analytics",
          "instructor": "Henry Evans",
          "duration": "10 weeks",
          "price": "$169",
          "image": "https://fullonapp.com/wp-content/uploads/2022/02/121.jpg",
          "rating": 4.7,
          "lessons": [
            { "title": "Data-driven Decision Making", "duration": 60 },
            { "title": "Statistical Analysis Techniques", "duration": 70 },
            { "title": "Business Intelligence Tools", "duration": 75 },
            { "title": "Predictive Analytics", "duration": 80 }
          ]
        },
        {
          "title": "Photography Fundamentals",
          "instructor": "Emma Turner",
          "duration": "8 weeks",
          "price": "$119",
          "image": "https://trisectinstitute.com/wp-content/uploads/2021/12/best-react-js-training-institute-1.png",
          "rating": 4.8,
          "lessons": [
            { "title": "Camera Settings and Exposure", "duration": 55 },
            { "title": "Composition and Lighting", "duration": 60 },
            { "title": "Photo Editing Basics", "duration": 50 },
            { "title": "Portrait and Landscape Photography", "duration": 70 }
          ]
        }
        // ... additional courses
      ];
      


    return (
        <div className="mx-5">
            <h1 className="text-xl my-5">Our Courses:</h1>
            <div className="grid grid-cols-5 gap-4">

                {
                    courses.map((course) => (
                        <Course courses={course} />
                    ))
                }

            </div>
        </div>

    )
}