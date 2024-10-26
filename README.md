# Files from http-5121
## Web Design
### Course Code: HTTP 5121

### Academic Year: 2025-2026

This course delivers the fundamentals of well-formed, semantic HTML markup and CSS. Students will design and build responsive web interfaces based on mockups that are optimized for accessibility and search engines (SEO).

# links
https://www.w3schools.com/html/default.asp

# Images
![Web Design Overview](webdesign.jpg)

***Important Notice:*** This repository contains my weekly work for this course. Understanding HTML and CSS fundamentals is crucial for creating effective and accessible web designs.

## Example Code

Here is an example of a simple HTML and CSS snippet used for creating a responsive web layout:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Responsive Web Design</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            margin: 0;
            padding: 0;
        }
        .container {
            width: 90%;
            margin: auto;
        }
        header {
            background: #4CAF50;
            color: white;
            padding: 10px 0;
            text-align: center;
        }
        .content {
            display: flex;
            justify-content: space-between;
            flex-wrap: wrap;
        }
        .box {
            background: #f4f4f4;
            padding: 20px;
            margin: 10px;
            flex: 1;
            min-width: 200px;
        }
    </style>
</head>
<body>

<header>
    <h1>Welcome to My Website</h1>
</header>

<div class="container">
    <div class="content">
        <div class="box">Box 1</div>
        <div class="box">Box 2</div>
        <div class="box">Box 3</div>
    </div>
</div>

</body>
</html>

