/**
 * @param {string} key
 * returns JSON.parse(data)
 */
export function getData(key) 
{
	try 
	{
		let data = localStorage.getItem(key);
		data = JSON.parse(data);
		return data;
	} 
	catch (error) 
	{
		return undefined;
	}
}
/**
 *
 * @param {string} key
 * @param {any} data
 */
export function saveData(key, data) 
{
	localStorage.setItem(key, JSON.stringify(data));
}

/**
 * @param {string} key
 * @param {any} newData
 */
export function updateData(key, newData) {
    try {
      let existingData = localStorage.getItem(key);
      existingData = JSON.parse(existingData);
      const updatedData = { ...existingData, ...newData };
      localStorage.setItem(key, JSON.stringify(updatedData));
      return updatedData;
    } 
    catch (error) 
    {
      console.error('Error updating data:', error);
      return undefined;
    }
  }
  