# Certificates Directory

This directory contains your professional and internship certificates.

## Structure

- `/internships`: Store your internship certificates here
- `/professional`: Store your professional course certificates here

## How to Add Certificates

1. Place your certificate images in the appropriate folder
2. Use PNG, JPG, or JPEG formats for best compatibility
3. Use descriptive filenames (e.g., `company-name-internship-2024.jpg` or `web-development-certification-2024.png`)
4. For optimal display, use images with a 4:3 aspect ratio

## Updating the Website

After adding your certificate images, you'll need to update the references in the code:

1. Open `src/app/credentials/page.tsx`
2. Replace the placeholder certificate components with your actual certificates
3. Update the paths to point to your certificate images (e.g., `/certificates/professional/your-certificate.jpg`)
4. Add relevant details like certificate name, issuing organization, and date
