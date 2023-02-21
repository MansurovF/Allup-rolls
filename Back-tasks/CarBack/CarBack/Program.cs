using CarBack.DataAccessLayer;
using Microsoft.EntityFrameworkCore;

var builder = WebApplication.CreateBuilder(args);
builder.Services.AddControllersWithViews();
builder.Services.AddDbContext<AppDbContext>(option =>
{
    option.UseSqlServer("Server=DESKTOP-5EK2RPI\\SQLEXPRESS;Database=CarsecondDb;Trusted_Connection=true");
});
var app = builder.Build();

app.MapControllerRoute(
    name: "default",
    pattern:"{controller=home}/{action=index}/{id?}"
    );

app.Run();
