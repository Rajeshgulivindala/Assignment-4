export default function paintRequiredForCopies(
    length: number,
    width: number,
    copies: number,
    coveragePerLiter: number = 10
  ): number {
    // Input validation
    if (typeof length !== 'number' || typeof width !== 'number' || typeof copies !== 'number') {
      throw new Error('All dimensions and copies must be numbers');
    }
    if (isNaN(length) || isNaN(width) || isNaN(copies)) {
      throw new Error('Inputs cannot be NaN');
    }
    if (length <= 0 || width <= 0) {
      throw new Error('Dimensions must be positive numbers');
    }
    if (copies <= 0) {
      throw new Error('Number of copies must be positive');
    }
  
    // Calculate rectangle area
    const rectangleArea = length * width;
  
    // Calculate triangle area (base = 1/3 of length)
    const triangleArea = (length / 3) * width / 2;
  
    // Total area per artwork (rectangle + 2 triangles)
    const totalAreaPerArtwork = rectangleArea + (2 * triangleArea);
  
    // Total paint required
    return (totalAreaPerArtwork * copies) / coveragePerLiter;
  }