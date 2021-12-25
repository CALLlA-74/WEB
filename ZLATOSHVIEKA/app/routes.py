from app import app, login_manager, db
from flask import render_template, request, redirect, flash, jsonify
from flask_login import login_required, login_user, current_user, logout_user
from app.models import User, Design, Cart
import json

design_id = None


@login_manager.user_loader
def load_user(user_id):
    return User.query.get(int(user_id))


@app.route('/')
@app.route('/index.html')
def index():
    if current_user.is_authenticated:
        return render_template('index.html', bt_input='Выйти', username=current_user.login)
    return render_template('index.html', bt_input='Войти', username='')


@app.route('/onClick_input', methods=['GET'])
def onclick_input():
    if current_user.is_authenticated:
        logout_user()
        return jsonify({'status': '1000'})                      # authorized
    return jsonify({'status': '1004'})                          # unauthorized


@app.route('/login.html', methods=['GET', 'POST'])
def login():
    if request.method == 'GET':
        return render_template('login.html')
    else:
        lgn = request.form['login']
        pswrd = request.form['password']
        user = User.query.filter_by(login=lgn).first()
        if user:
            if user.check_pswrd(pswrd):
                login_user(user)
                return redirect('/index.html')
            else:
                flash("НЕВЕРНЫЙ ЛОГИН ИЛИ ПАРОЛЬ!", "error")
        else:
            flash("НЕВЕРНЫЙ ЛОГИН ИЛИ ПАРОЛЬ!", "error")
    return redirect('/login.html')


@app.route('/sign_up.html', methods=['GET', 'POST'])
def sign_up():
    if request.method == 'GET':
        return render_template('sign_up.html', scrpt='')
    else:
        lgn = request.form['login']
        email = request.form['email']
        pswrd = request.form['password']
        cnf_pswrd = request.form['conf_password']
        if len(lgn) <= 0 or len(email) <= 0 or len(pswrd) < 8 or pswrd != cnf_pswrd:
            return render_template('sign_up.html', login=lgn, email=email, pswrd=pswrd, conf_pass=cnf_pswrd, scrpt='sign_up_2.js')
        if User.query.filter_by(login=lgn).first() or User.query.filter_by(email=email).first():
            return render_template('sign_up.html', login=lgn, email=email, pswrd=pswrd, conf_pass=cnf_pswrd, scrpt='sign_up_2.js')
        user = User(login=lgn, email=email)
        user.set_pswrd(pswrd)
        db.session.add(user)
        db.session.commit()
    return redirect('/login.html')


@app.route('/check_login', methods=['GET'])
def check_login():
    lgn = request.form['login']
    if lgn:
        if User.query.filter_by(login=lgn).first():
            return jsonify({'status': '204'})                   # user is exist
        else:
            return jsonify({'status': '200'})                   # user is not exist

    return jsonify({'status': '200'})


@app.route('/check_email', methods=['GET'])
def check_email():
    eml = request.form['email']
    print(eml)
    if eml:
        if User.query.filter_by(email=eml).first():
            return jsonify({'status': '201'})
        else:
            return jsonify({'status': '200'})

    return jsonify({'status': '200'})


@app.route('/cart.html')
@login_required
def cart():
    cart = Cart.query.filter_by(user_id=current_user.id);
    sum = 0
    for design in cart:
        sum += int(Design.query.filter_by(id=design.design_id).first().price[0:-1])
    return render_template('cart.html', bt_input='Выйти', username=current_user.login, cart=cart, Design=Design, sum=sum)


@app.route('/remove_from_cart')
def remove_from_cart():
    Cart.query.filter_by(id=int(request.args['id'])).delete()
    db.session.commit()
    return jsonify({'result': 'ok'})


@app.route('/delivery.html')
def delivery():
    if current_user.is_authenticated:
        return render_template('delivery.html', bt_input='Выйти', username=current_user.login)
    return render_template('delivery.html', bt_input='Войти', username='')


@app.route('/dev_design.html')
@login_required
def dev_design():
    if current_user.is_authenticated:
        return render_template('dev_design.html', bt_input='Выйти', username=current_user.login)
    return render_template('dev_design.html', bt_input='Войти', username='')


@app.route('/embr_works.html')
def embr_works():
    designs = Design.query.all()
    if current_user.is_authenticated:
        return render_template('embr_works.html', bt_input='Выйти', username=current_user.login, designs=designs)
    return render_template('embr_works.html', bt_input='Войти', username='', designs=designs)


@app.route('/get_des_id', methods=['GET'])
def get_des_id():
    global design_id
    design_id = int(request.args['id'])
    return jsonify({'result': 'ok'})


@app.route('/payment.html')
def payment():
    if current_user.is_authenticated:
        return render_template('payment.html', bt_input='Выйти', username=current_user.login)
    return render_template('payment.html', bt_input='Войти', username='')


@app.route('/profile_ware.html', methods=['GET'])
def profile_ware():
    global design_id
    if design_id is None:
        return redirect('/')
    design = Design.query.filter_by(id=design_id).first()
    if current_user.is_authenticated:
        return render_template('profile_ware.html', bt_input='Выйти', username=current_user.login, design=design)
    return render_template('profile_ware.html', bt_input='Войти', username='', design=design)


@app.route('/get_imgs')
def get_imgs():
    images_path = (Design.query.filter_by(id=int(request.args['design_id'])).first()).imgs_path
    return jsonify(json.dumps(images_path))


@app.route('/add_to_cart_design')
@login_required
def add_to_cart_design():
    design = Design.query.filter_by(id=int(request.args['design_id'])).first()
    chck = Cart.query.filter_by(user_id=current_user.id, design_id=design.id).first()
    if chck:
        return jsonify({"response": 'already in cart'})
    cart = Cart(type_of_design=0, user_id=current_user.id, design_id=design.id)
    db.session.add(cart)
    db.session.commit()
    return jsonify({"response": 'ok'})


@app.route('/contacts.html')
def contacts():
    if current_user.is_authenticated:
        return render_template('contacts.html', bt_input='Выйти', username=current_user.login)
    return render_template('contacts.html', bt_input='Войти', username='')
