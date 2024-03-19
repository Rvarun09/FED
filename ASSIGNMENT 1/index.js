

// Create a new div element to be the container for the entire page
const container = document.createElement('div');
container.id = 'container';

// Create a new header element
const header = document.createElement('header');
header.id = 'header';

// Create the header content as a paragraph element
const headerContent = document.createElement('p');
headerContent.textContent = 'amazon';
header.appendChild(headerContent);

// Create a new section element
const section = document.createElement('section');
section.id = 'main';

// Create the main content as an unordered list
const mainList = document.createElement('ul');
mainList.id = 'content';

// Create the list items and append them to the unordered list
const listItem1 = document.createElement('li');
const link1 = document.createElement('a');
link1.textContent = 'Black and Gray Athletic Cotton Socks - 6 Pairs';
link1.href = '#';
listItem1.appendChild(link1);

const listItem2 = document.createElement('li');
const link2 = document.createElement('a');
link2.textContent = '$10.90';
link2.href = '#';
listItem2.appendChild(link2);

const listItem3 = document.createElement('li');
const button1 = document.createElement('button');
button1.textContent = 'Add to Cart';
listItem3.appendChild(button1);

mainList.appendChild(listItem1);
mainList.appendChild(listItem2);
mainList.appendChild(listItem3);

section.appendChild(mainList);

// Create the sidebar content as an unordered list
const sidebar = document.createElement('aside');
sidebar.id = 'sidebar';

const sidebarList = document.createElement('ul');

const listItem4 = document.createElement('li');
const link3 = document.createElement('a');
link3.textContent = '$20.95';
link3.href = '#';
listItem4.appendChild(link3);

const listItem5 = document.createElement('li');
const button2 = document.createElement('button');
button2.textContent = 'Add to Cart';
listItem5.appendChild(button2);

sidebarList.appendChild(listItem4);
sidebarList.appendChild(listItem5);

sidebar.appendChild(sidebarList);

// Append the header, main section, and sidebar to the container
container.appendChild(header);
container.appendChild(section);
container.appendChild(sidebar);

// Add the container to the page
document.body.appendChild(container);

// Define the CSS styles
const styles = `
#container {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

#header {
  background-color: #f2f2f2;
  padding: 10px;
}

#main {
  flex: 1;
  margin-right: 20px;
}

#sidebar {
  background-color: #f2f2f2;
  padding: 10px;
  width: 250px;
}

#content {
  list-style-type: none;
  padding: 0;
}

#content li {
  margin-bottom: 10px;
}

#content a {
  text-decoration: none;
  color: #333;
}

#content button {
  background-color: #4CAF50;
  color: white;
  padding: 5px 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

#content button:hover {
  background-color: #45a049;
}
`;

// Create a new style element and add the CSS styles
const style = document.createElement('style');
style.textContent = styles;
document.head.appendChild(style);