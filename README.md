# Flask Portfolio Website - Day 55 of 100 Days of Code

## 📌 Project Overview

This is a personal portfolio website built with **Flask**, a lightweight Python web framework. The project is part of **Day 55** of Dr. Angela Yu's **100 Days of Code: The Complete Python Pro Bootcamp** on Udemy. It showcases my professional profile, projects, education, certifications, and achievements as a Machine Learning Engineer.

## 🎯 Learning Objectives

This project demonstrates proficiency in:
- **Flask Framework**: Understanding web application structure and routing
- **Template Rendering**: Using Jinja2 templating engine to serve HTML pages
- **Web Development**: Creating static websites with Python backend
- **Project Structure**: Organizing Flask applications with proper directory hierarchy
- **Full-Stack Basics**: Connecting backend logic with frontend presentation

## 🛠️ Technologies Used

- **Python 3.x** - Core programming language
- **Flask** - Micro web framework for Python
- **HTML5** - Markup for web pages
- **CSS3** - Styling (referenced in `static/styles.css`)
- **Jinja2** - Template engine (built into Flask)

## 📂 Project Structure

```
flask-portfolio/
│
├── main.py                      # Flask application entry point
├── templates/                   # HTML templates directory
│   └── vijayaragul.html        # Portfolio page template
├── static/                      # Static files directory
│   └── styles.css              # CSS stylesheet
└── README.md                    # Project documentation
```

## 🚀 Features

### Portfolio Highlights:
- **Professional Header**: Name, title, contact information, and social links
- **Profile Summary**: Brief introduction showcasing ML engineering aspirations
- **Projects Section**: 
  - Wildfire Prediction and Severity Model
  - Flood Disaster Management Model
- **Education**: Academic background and qualifications
- **Certifications**: Professional courses completed
- **Achievements**: Notable accomplishments including Kaggle rankings and blog authorship

### Technical Features:
- Clean, semantic HTML structure
- Responsive design foundation
- Flask routing system
- Debug mode for development
- Modular template organization

## 💻 Installation & Setup

### Prerequisites
- Python 3.7 or higher
- pip (Python package manager)

### Installation Steps

1. **Clone the repository** (or download the files):
```bash
git clone <your-repository-url>
cd flask-portfolio
```

2. **Create a virtual environment** (recommended):
```bash
python -m venv venv
```

3. **Activate the virtual environment**:
   - Windows:
   ```bash
   venv\Scripts\activate
   ```
   - macOS/Linux:
   ```bash
   source venv/bin/activate
   ```

4. **Install Flask**:
```bash
pip install flask
```

5. **Run the application**:
```bash
python main.py
```

6. **Access the website**:
   - Open your browser and navigate to: `http://127.0.0.1:5000/`

## 🔧 Code Breakdown

### main.py
```python
from flask import Flask, render_template

app = Flask(__name__)  # Initialize Flask application

@app.route('/')  # Define route for homepage
def homepage():
    return render_template('index.html')  # Render template

if __name__ == "__main__":
    app.run(debug=True)  # Run with debug mode enabled
```

**Key Concepts:**
- `Flask(__name__)`: Creates the Flask application instance
- `@app.route('/')`: Decorator that maps URL path to function
- `render_template()`: Renders HTML from templates folder
- `debug=True`: Enables auto-reload and detailed error messages

## 📝 About Me - Vijayaragul

**Role**: Machine Learning Engineer  
**Location**: Chennai  
**Education**: B.E - Computer Science, SRM Engineering College (CGPA: 7.9)

### Technical Expertise:
- **Programming**: Python
- **ML Frameworks**: TensorFlow, Scikit-learn
- **Data Tools**: Pandas, NumPy, Matplotlib
- **Web Development**: Flask, HTML, CSS

### Notable Projects:
1. **Wildfire Prediction Model** - Predicts wildfire occurrence and severity using environmental data
2. **Flood Disaster Management Model** - Classifies flood severity based on disaster records

### Achievements:
- 📝 Author of "Vijayaragul's Blog" with 24+ posts on Data Science and ML
- 🏆 Top 700 on Kaggle's Spaceship Titanic competition (79.939% accuracy)

## 🎓 Learning Journey - 100 Days of Code

**Day 55 Focus**: Flask Web Development
- Understanding Flask fundamentals
- Creating routes and views
- Working with templates
- Building a complete web application

This project marks an important milestone in transitioning from console-based Python applications to web-based solutions, demonstrating the versatility of Python in full-stack development.

## 🔜 Future Enhancements

- [ ] Add more routes for different pages (About, Projects, Contact)
- [ ] Implement dynamic content loading
- [ ] Add form handling for contact section
- [ ] Integrate database for blog posts
- [ ] Deploy to production (Heroku, PythonAnywhere, or AWS)
- [ ] Add responsive design improvements
- [ ] Implement navigation menu
- [ ] Add project filtering and search functionality

## 📚 Resources & References

- [Flask Documentation](https://flask.palletsprojects.com/)
- [100 Days of Code by Dr. Angela Yu](https://www.udemy.com/course/100-days-of-code/)
- [Jinja2 Documentation](https://jinja.palletsprojects.com/)

## 📧 Contact

- **Email**: vijayaragul2005@gmail.com
- **LinkedIn**: [linkedin.com/in/vijayaragul](https://linkedin.com/in/vijayaragul)
- **GitHub**: [github.com/VIJAYARAGUL362](https://github.com/VIJAYARAGUL362)
- **Phone**: 6380408939

## 📄 License

This project is created for educational purposes as part of the 100 Days of Code challenge.

---

**Note**: This is Day 55 of my 100 Days of Code journey! Follow along as I continue building exciting projects and mastering Python. 💪🚀

*Last Updated: February 2026*
