# Database Queries

### Display the ProductName and CategoryName for all products in the database. Shows 76 records.

- 
SELECT ProductName, CategoryName
FROM Products as p
JOIN Categories as c on p.CategoryId = c.CategoryId

### Display the OrderID and ShipperName for all orders placed before January 9, 1997. Shows 161 records.

- 
SELECT OrderID, ShipperName as shippedBy
FROM Orders as o
JOIN Shippers as s on o.Shipperid = s.Shipperid
order by s.Shipperid < 'January 9, 1997'

### Display all ProductNames and Quantities placed on order 10251. Sort by ProductName. Shows 3 records.

- 
SELECT ProductName, Quantity 
FROM Products
JOIN OrderDetails 
group by OrderID = 10251
Order by ProductName

### Display the OrderID, CustomerName and the employee's LastName for every order. All columns should be labeled clearly. Displays 196 records.

- 
SELECT OrderID as orders, CustomerName as FirstName, LastName
FROM Orders as o
JOIN Customers as c, Employees as e
GROUP BY Orders

### (Stretch)  Displays CategoryName and a new column called Count that shows how many products are in each category. Shows 9 records.

### (Stretch) Display OrderID and a  column called ItemCount that shows the total number of products placed on the order. Shows 196 records. 