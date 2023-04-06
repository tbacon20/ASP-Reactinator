using Microsoft.EntityFrameworkCore;
using React_Backend.Models;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();
builder.Services.AddDbContext<JoelHiltonMovieCollectionContext>(options =>
    options.UseSqlite(builder.Configuration.GetConnectionString("BackendDataConnection"))
);
// This will allow us to bipass cors errors
builder.Services.AddCors();

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

// Now we can use the app.UseCors() method to allow requests from our front end
app.UseCors(c => c.WithOrigins("http://localhost:3000"));

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.Run();
