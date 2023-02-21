using Microsoft.VisualStudio.Web.CodeGeneration.EntityFrameworkCore;
using CarBack.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Internal;

namespace CarBack.DataAccessLayer
{
    public class AppDbContext :DbContext
    {
        public AppDbContext(DbContextOptions<AppDbContext> options) : base(options)
        {

        }
    }
}
