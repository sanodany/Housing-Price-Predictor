// Simple k-Nearest Neighbors Regression implementation
export function predictPrice(features, dataset, k = 3) {
    // Calculate Euclidean distance from input features to each point in dataset
    const distances = dataset.map(item => {
        const dist = Math.sqrt(
            Math.pow(item.sqm - features.sqm, 2) + 
            Math.pow(item.rooms - features.rooms, 2)
        );
        return { dist, price: item.price };
    });

    // Sort by closest distance
    distances.sort((a, b) => a.dist - b.dist);

    // Take top 'k' neighbors and average their prices
    const kNearest = distances.slice(0, k);
    const sumPrice = kNearest.reduce((acc, curr) => acc + curr.price, 0);
    
    return sumPrice / kNearest.length;
}