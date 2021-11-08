import os
from flask import Blueprint, jsonify, request
from ..s3_demo import list_files, download_file, upload_file

UPLOAD_FOLDER = 'uploads'
BUCKET = 'viropayati-dev'

s3_routes = Blueprint('s3', __name__)

@s3_routes.route('/storage')
def storage():
    contents = list_files('viropayati-dev')

@s3_routes.route('/upload', methods=['POST'])
def upload():
    f = request.files['file']
    print(f)
    f = f.to_dict()
   
    # f.save(os.path.join(UPLOAD_FOLDER, f.filename))
    upload_file(f, BUCKET)

    return 