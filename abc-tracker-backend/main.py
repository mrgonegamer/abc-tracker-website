from flask import Flask, request, jsonify
from flask_cors import CORS
import psycopg2

# Connection string with your Supabase database details
connection_string = "dbname=postgres user=postgres password=christie4EVER1202! host=db.khpicirpoofgypeootox.supabase.co port=5432"

app = Flask(__name__)
CORS(app)

def create_connection():
    # Create a new connection using the connection string
    return psycopg2.connect(connection_string)

@app.route('/register', methods=['POST'])
def register():
    data = request.get_json()
    username = data.get('username')
    password = data.get('password')

    # Establish a new connection
    connection = create_connection()

    try:
        with connection.cursor() as cursor:
            # Check if the username already exists in the database
            query = "SELECT * FROM accounts WHERE username = %s LIMIT 1"
            cursor.execute(query, (username,))
            existing_user = cursor.fetchone()

            if existing_user:
                return jsonify({'error': 'Username already exists'})

            # Insert a new user account
            query = "INSERT INTO accounts (username, password) VALUES (%s, %s)"
            cursor.execute(query, (username, password))
            connection.commit()

        return jsonify({'message': 'Account created successfully'})

    except Exception as e:
        print('Error occurred during account creation:', e)
        return jsonify({'error': 'Failed to create account'})

    finally:
        connection.close()

@app.route('/login', methods=['POST'])
def login():
    data = request.get_json()
    username = data.get('username')
    password = data.get('password')

    # Establish a new connection
    connection = create_connection()

    try:
        with connection.cursor() as cursor:
            # Verify the username and password
            query = "SELECT * FROM accounts WHERE username = %s AND password = %s LIMIT 1"
            cursor.execute(query, (username, password))
            user = cursor.fetchone()

            if user:
                return jsonify({'message': 'Login successful'})
            else:
                return jsonify({'error': 'Invalid username or password'})

    except Exception as e:
        print('Error occurred during login:', e)
        return jsonify({'error': 'Failed to login'})

    finally:
        connection.close()

@app.route('/save-data', methods=['POST'])
def save_data():
    data = request.get_json()
    vin = data.get("vin")
    make = data.get("make")
    model = data.get("model")
    year = data.get("year")
    color = data.get("color")
    milage = data.get("milage")
    dateBought = data.get("dateBought")
    dateReceived = data.get("dateReceived")
    dateSold = data.get("dateSold")
    oilChange = data.get("oilChange")
    carWashDate = data.get("carWashDate")
    arbitration = data.get("arbitration")
    visualInspectionDate = data.get("visualInspectionDate")
    fluidsCheckedDate = data.get("fluidsCheckedDate")
    testDriveDate = data.get("testDriveDate")
    buyersGuide = data.get("buyersGuide")
    frazer = data.get("frazer")
    pictures = data.get("pictures")
    partsNeeded = data.get("partsNeeded")
    partsOnOrder = data.get("partsOnOrder")
    partsReceived = data.get("partsReceived")
    partsInstalled = data.get("partsInstalled")

       # Establish a new connection
    connection = create_connection()

    try:
        with connection.cursor() as cursor:
            # Insert data into the 'car_inventory' table
            query = """
            INSERT INTO cars (vin, make, model, year, color, milage, dateBought, dateReceived, dateSold, oilChange, carWashDate, arbitration, visualInspectionDate, fluidsCheckedDate, testDriveDate, buyersGuide, frazer, pictures, partsNeeded, partsOnOrder, partsReceived, partsInstalled)
            VALUES (%s, %s, %s, %s, %s, %s, %s, %s, {}, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s)
            """.format("''" if dateSold == "" else "%s")

            cursor.execute(query, (vin, make, model, year, color, milage, dateBought, dateReceived, dateSold, oilChange, carWashDate, arbitration, visualInspectionDate, fluidsCheckedDate, testDriveDate, buyersGuide, frazer, pictures, partsNeeded, partsOnOrder, partsReceived, partsInstalled))
         
            connection.commit()

        return jsonify({'message': 'Data saved successfully'})

    except Exception as e:
        print('Error occurred during data saving:', e)
        return jsonify({'error': 'Failed to save data'})

    finally:
        connection.close()

@app.route('/data')
def get_data():
    # Establish a new connection
    connection = create_connection()

    try:
        with connection.cursor() as cursor:
            # Retrieve data from the 'car_inventory' table
            query = "SELECT * FROM car_inventory"
            cursor.execute(query)
            data = cursor.fetchall()

        return jsonify({'data': data})

    except Exception as e:
        print('Error occurred during data retrieval:', e)
        return jsonify({'error': 'Failed to retrieve data'})

    finally:
        connection.close()

@app.route('/')
def home():
    return 'Welcome to the backend server'

if __name__ == "__main__":
    app.run()