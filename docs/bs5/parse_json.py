import json 

# parse the books.json file
with open('books.json') as f: 
	print("Loading the data....")
	data = json.load(f)

f.close()

# now get the titles and authors
titles = []
authors = []

counter = 0 

for s in range(len(data)):
	if (counter % 5 == 0):
		print(f"On entry {counter}")
	# print(data[s]["title"])
	# print(data[s]["authors"])

	# add to the arrays
	titles.append(data[s]["title"])
	authors.append(data[s]["authors"])
	counter = counter +1

# print(titles)
# print(authors)

f = open("cursed_text.html", "w")
formatted_string = "<option></option>"

for s in range(len(data)):
	formatted_string = "<option>{}</option>".format(titles[s])
	f.write(formatted_string+"\n")
	print(formatted_string)

f.close()
