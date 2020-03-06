'''
This script will print out a carousel-item for each file in the directory
provided below.  It assumes that every file in the provided directory
is a valid image format, if that is not the case you will need to filter
manually or by file extention.
'''
from os import listdir

realativeDirPathFromWebsiteRoot = "images/SarahAndJack/"
for fileName in listdir("../" + realativeDirPathFromWebsiteRoot):
    realativeFilePath = realativeDirPathFromWebsiteRoot + fileName
    print('<a class="carousel-item" href="' + realativeFilePath
           + '" target="_blank"><img src="' + realativeFilePath
           + '"></a>')

