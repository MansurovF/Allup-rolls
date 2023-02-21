Create Database Kitabxana
Use Kitabxana

Create table Books
(
Id int Not null primary key,
Name nvarchar (100) Not null Check (LEN(Name) Between 2 and 100),
PageCount int Check  (PageCount >= 10),
)

Alter table Authors
(
Id int Not null primary key,
Name nvarchar (100) Not null,
Surname nvarchar(100) 
)
Select *From Authors

Create table AutoBook
(
Id int identity,
AuthorId int Foreign Key References Authors(Id),
BookId int Foreign Key References Books(Id)
)

Create View usv_BackAutobook
as
Select Books.Id,Books.Name,Books.PageCount,Authors.Name + ' '+ Authors.Surname as Fullname from Books
Join AutoBook on Books.Id=AutoBook.BookId
Join Authors on Authors.Id =AutoBook.AuthorId

Select*From usv_BackAutobook

Create Procedure usp_AllofP
@AllofP nvarchar(100)
as
Begin
Select*From usv_BackAutoBook
End



