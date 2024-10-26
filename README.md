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
    <title>Checkout Order #1234</title>
</head>

<body>


    <header>
        <h1><a href="#">Fake Store</a></h1>
        <ul>
            <li><a href="#">Account</a></li>
            <li><a href="#">Cart</a></li>
        </ul>
    </header>


    <nav>
        <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">Shop</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Contact</a></li>
        </ul>
    </nav>


    <main>
        <h2>Checkout Order #1234 - Billing and Payment</h2>
        <p>Order total: $129.57</p>

        <form action="#" method="post">


            <fieldset>
                <legend>Billing information</legend>

                <div>
                    <label for="first-name">First name:</label>
                    <input type="text" id="first-name" name="first-name" value="John">



                    <label for="last-name">Last name:</label>
                    <input type="text" id="last-name" name="last-name" value="Doe">
                </div>

                <div>
                    <label for="address">Address:</label>
                    <input type="text" id="address" name="address" value="123 Fake Street">
                </div>

                <div>
                    <label for="city">City:</label>
                    <input type="text" id="city" name="city" value="Toronto">



                    <label for="province">Province:</label>
                    <select id="province" name="province">
                        <option value="" disabled selected>-- Choose province --</option>
                        <option value="NB">New Brunswick</option>
                        <option value="ON">Ontario</option>
                        <option value="QC">Quebec</option>
                    </select>



                    <label for="postal-code">Postal code:</label>
                    <input type="text" id="postal-code" name="postal-code" value="A1A 1A1">
                </div>

                <div>
                    <label for="phone-number">Phone number:</label>
                    <input type="tel" id="phone-number" name="phone-number" value="555-555-5555">
                </div>
            </fieldset>


            <fieldset>
                <legend>Payment information</legend>
                <div>
                    <fieldset>
                        <legend>Choose card:</legend>
                        <div>
                            <input type="radio" id="mastercard" name="card-type" value="MasterCard" checked>
                            <label for="mastercard">MasterCard</label>
                        </div>
                        <div>
                            <input type="radio" id="visa" name="card-type" value="Visa">
                            <label for="visa">Visa</label>
                        </div>
                    </fieldset>
                </div>

                <div>
                    <label for="card-number">Card number:</label>
                    <input type="text" id="card-number" name="card-number" inputmode="numeric"
                        value="1234 1234 1234 1234">
                </div>

                <div>
                    <label for="expiry">Card expiry:</label>
                    <input type="text" id="expiry" name="expiry" placeholder="MM/YY">
                </div>
            </fieldset>
            <div>
                <button type="submit">Pay now</button>
            </div>
        </form>
    </main>


    <footer>
        <p>&copy; Copyright HTTP5121, 2024.</p>
    </footer>

</body>

</html>
