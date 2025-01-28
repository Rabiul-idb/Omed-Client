# OMED – Online Medicine

**OMED** is a multi-vendor medicine-selling e-commerce website and a MERN stack application. This platform provides a seamless user experience for purchasing medicines, submitting queries, managing advertisements, and receiving expert advice using the MERN stack.

---

## Features of OMED

1. Fully responsive design.
2. Image upload and display functionality.
3. Specific routes for specific users (Admin, Seller, and User).
4. Advertisement management.
5. Private routes for Admin, Seller, and User.
6. Loading spinner for better UX.
7. SweetAlert and Toastify for notifications.
8. Firebase authentication for secure user login and registration.
9. Stripe payment gateway integration.
10. Environment variables for Firebase and MongoDB credentials.
11. Product sorting functionality.
12. Dynamic title updates for each page.
13. Use of React Hook Form for form handling.
14. Data fetching with TanStack Queries (GET method).
15. PDF download/print feature (upcoming).

---

## Project Structure and Details

### **Home Page**
- **Navbar:** Includes the logo, site name, menu links, cart icon, and a "Join In" button (for unauthenticated users). When logged in, the user's profile picture appears with a dropdown menu containing "Dashboard," "Update Profile," and "Logout."
- **Slider:** Features a swiper slider. Sellers can request to add items here, but only admins can approve or remove them.
- **Category Section:** Admins can manage category items. Each category displays the total number of products. Clicking on a category navigates to a page listing all products within that category in a tabular format.
- **Discount Products:** Products with discounts appear in a draggable slider section.
- **Top-Selling Products:** Displays top-selling products as cards. Clicking the eye icon on a product card navigates to its details page.
- **Specially for You:** Includes offers or services for users. "Registered Pharmacy" and "Upload Prescription" features are under construction.
- **CTA and Footer:** A static CTA and footer with site information, present on all pages.

### **User Features**
- **Registration and Authentication:** Fully authenticated using Firebase.
- **Shop Page:**
  - Displays all medicines in tabular format.
  - Includes an eye button (to view details in a modal) and a select button (to add items to the cart).
  - Users can filter or sort products by company.
- **Cart Page:**
  - Displays selected medicines with options to adjust quantity, remove items, or clear the cart.
  - Shows a subtotal box with prices, discounts, and shipping fees, which update dynamically.
  - Includes a "Checkout" button to proceed to payment.
- **Checkout Page:** Users can pay with their card via Stripe.

### **Admin Dashboard Features**
1. Admin home page with statistics.
2. Manage users.
3. Manage categories.
4. Manage banner advertisements.
5. Payment management.

### **Seller Dashboard Features**
1. Seller home page.
2. Manage medicines.
3. Request for advertisements.

### **User Dashboard Features**
1. View payment history.

---

## Technology Stack
- **Frontend:** React.js, Tailwind CSS, React Hook Form
- **Backend:** Node.js, Express.js
- **Database:** MongoDB
- **Authentication:** Firebase
- **Payment Gateway:** Stripe

---

## Deployment
**Live Project Link:** [OMED](https://omed-e7f28.web.app/)

### Admin Login:
- **Username:** html5@g.com
- **Password:** abCD12@@

### Seller Login:
- **Username:** react@g.com
- **Password:** abCD12@@

---

## Thank You
Thank you for visiting my website. Keep purchasing from OMED for all your medicine needs.😉

**Best Regards,**  
Md. Rabiul Islam

