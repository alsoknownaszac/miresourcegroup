# Sales and Distribution Service - Backup Images & Content

## Previous Warehouse Image
**Asset ID:** `image-979434a7be187d21899688e9a40dda5d8b3dd3fc-1200x1600-jpg`
**Source:** Custom logistics/warehouse image
**Used for:** Main service image before switching to HP laptop

## Removed "Products We Deal With" Section
This section was removed from service-details.tsx but can be restored if needed.

### Header
```tsx
<h4 className="text-xs sm:text-sm font-bold text-foreground uppercase tracking-wider mb-3 sm:mb-4">
  Our Products
</h4>
```

### Product Images Mapping
```typescript
const productImages: Record<string, string> = {
  "IT equipment, software (e.g. printers, laptops)": "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=400&q=80",
  "Communication Equipment and Gadgets": "https://images.unsplash.com/photo-1556656793-08538906a9f8?w=400&q=80",
  "Office and home wears equipment": "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=400&q=80",
  "Electrical and Electronics": "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=400&q=80",
  "Carbon reduction technology": "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=400&q=80",
}
```

### Product Categories
- IT equipment, software (e.g. printers, laptops)
- Communication Equipment and Gadgets
- Office and home wears equipment
- Electrical and Electronics
- Carbon reduction technology

### Component Code (for restoration)
Located in: `components/services/service-details.tsx` (removed lines 217-244)

```tsx
{/* Products section — shown only when service has products */}
{services[activeTab].products && services[activeTab].products!.length > 0 && (
  <div>
    <h4 className="text-xs sm:text-sm font-bold text-foreground uppercase tracking-wider mb-3 sm:mb-4">
      Our Products
    </h4>
    <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
      {services[activeTab].products!.map((product) => (
        <div
          key={product}
          className="group/product relative overflow-hidden rounded-xl border border-border bg-secondary/30 hover:border-primary/40 transition-all duration-300"
        >
          <div className="aspect-[4/3] relative">
            <img
              src={productImages[product] ?? `https://images.unsplash.com/photo-1518770660439-4636190af475?w=400&q=80`}
              alt={product}
              className="w-full h-full object-cover group-hover/product:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
            <p className="absolute bottom-2 left-2 right-2 text-white text-xs font-semibold leading-tight">
              {product}
            </p>
          </div>
        </div>
      ))}
    </div>
  </div>
)}
```

## To Restore
1. Add the Product Images Mapping back to service-details.tsx
2. Uncomment the Products section code above
3. Ensure service documents still have `products` array in Sanity

## To Use Warehouse Image Again
Update Sales and Distribution service image in Sanity to:
- Asset ID: `image-979434a7be187d21899688e9a40dda5d8b3dd3fc-1200x1600-jpg`
