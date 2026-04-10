"""
Project Title: Contact Management System
Name: Prince Tiwari
Date: 2026
Description: Flask-based CRUD application for managing contacts
"""

from flask import Flask, render_template, request, redirect, url_for

app = Flask(__name__)

# In-memory storage (list of dictionaries)
contacts = []

# Home Route - Display Contacts
@app.route('/')
def index():
    return render_template('index.html', contacts=contacts)

# Add Contact
@app.route('/add', methods=['GET', 'POST'])
def add_contact():
    if request.method == 'POST':
        name = request.form['name']
        phone = request.form['phone']
        email = request.form['email']

        # Validation
        if name and phone and email:
            contacts.append({
                'id': len(contacts),
                'name': name,
                'phone': phone,
                'email': email
            })

        return redirect(url_for('index'))

    return render_template('add_contact.html')

# Edit Contact
@app.route('/edit/<int:id>', methods=['GET', 'POST'])
def edit_contact(id):
    contact = contacts[id]

    if request.method == 'POST':
        contact['name'] = request.form['name']
        contact['phone'] = request.form['phone']
        contact['email'] = request.form['email']
        return redirect(url_for('index'))

    return render_template('edit_contact.html', contact=contact)

# Delete Contact
@app.route('/delete/<int:id>')
def delete_contact(id):
    contacts.pop(id)
    return redirect(url_for('index'))

# Search Feature
@app.route('/search', methods=['POST'])
def search():
    query = request.form['query'].lower()
    filtered = [c for c in contacts if query in c['name'].lower() or query in c['phone']]
    return render_template('index.html', contacts=filtered)

if __name__ == '__main__':
    app.run(debug=True)