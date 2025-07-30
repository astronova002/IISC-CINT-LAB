#!/usr/bin/env python
"""
Management script for CINT Lab Django Admin Portal
"""
import os
import sys
import subprocess

def run_command(command, description):
    """Run a command with description"""
    print(f"\n{'='*50}")
    print(f"🔥 {description}")
    print(f"{'='*50}")
    try:
        result = subprocess.run(command, shell=True, check=True)
        print(f"✅ {description} completed successfully!")
        return True
    except subprocess.CalledProcessError as e:
        print(f"❌ Error: {description} failed with exit code {e.returncode}")
        return False

def main():
    print("🚀 CINT Lab Django Admin Portal Management")
    print("Choose an option:")
    print("1. Install dependencies")
    print("2. Run migrations")
    print("3. Create superuser")
    print("4. Start development server")
    print("5. Collect static files")
    print("6. Create migrations")
    print("7. Full setup (1+2+3)")
    print("8. Exit")
    
    choice = input("\nEnter your choice (1-8): ").strip()
    
    if choice == "1":
        run_command("pip install -r requirements.txt", "Installing dependencies")
    
    elif choice == "2":
        run_command("python manage.py migrate", "Running migrations")
    
    elif choice == "3":
        run_command("python manage.py createsuperuser", "Creating superuser")
    
    elif choice == "4":
        print("\n🌐 Starting Django development server...")
        print("Admin Panel: http://127.0.0.1:8000/admin/")
        print("API Root: http://127.0.0.1:8000/api/")
        print("Press Ctrl+C to stop the server")
        run_command("python manage.py runserver", "Starting development server")
    
    elif choice == "5":
        run_command("python manage.py collectstatic --noinput", "Collecting static files")
    
    elif choice == "6":
        run_command("python manage.py makemigrations", "Creating migrations")
    
    elif choice == "7":
        print("\n🔧 Running full setup...")
        if (run_command("pip install -r requirements.txt", "Installing dependencies") and
            run_command("python manage.py migrate", "Running migrations")):
            print("\n👤 Now create a superuser...")
            run_command("python manage.py createsuperuser", "Creating superuser")
    
    elif choice == "8":
        print("👋 Goodbye!")
        sys.exit(0)
    
    else:
        print("❌ Invalid choice. Please select 1-8.")

if __name__ == "__main__":
    # Change to the directory containing this script
    os.chdir(os.path.dirname(os.path.abspath(__file__)))
    main()
