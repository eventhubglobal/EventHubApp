// Test script to find valid business size values for the vendor API
const API_BASE_URL = 'https://waitlist-cos3.onrender.com';

const businessSizes = [
  'solo entrepreneur', 
  'small business (2-10 people)', 
  'medium business (11-50 people)', 
  'large business (50+ people)'
];

async function testBusinessSize(businessSize) {
  const timestamp = Date.now();
  const testData = {
    firstName: 'Test',
    lastName: 'Vendor',
    email: `test${businessSize.replace(/\s+/g, '')}${timestamp}@example.com`,
    companyOrganization: 'Test Company',
    phoneNumber: '+1234567890', // Added required phone number
    location: 'Test City',
    eventTypes: ['Catering & Drinks'],
    eventFrequency: 'monthly',
    businessSize: businessSize,
    excitedFeatures: 'Testing business size',
    receiveUpdates: true,
    betaTester: false
  };
  
  try {
    const response = await fetch(`${API_BASE_URL}/api/waitlist/vendors`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(testData),
    });
    
    const responseText = await response.text();
    
    if (response.ok) {
      console.log(`✅ SUCCESS: "${businessSize}" is VALID!`);
      return true;
    } else {
      console.log(`❌ FAILED: "${businessSize}" - Status: ${response.status}, Response: ${responseText}`);
      return false;
    }
  } catch (error) {
    console.error(`❌ ERROR testing "${businessSize}":`, error);
    return false;
  }
}

async function runTests() {
  console.log('🔍 Testing business size values...\n');
  
  for (const businessSize of businessSizes) {
    const isValid = await testBusinessSize(businessSize);
    if (isValid) {
      console.log(`\n🎉 FOUND VALID BUSINESS SIZE: "${businessSize}"`);
      break;
    }
    // Small delay between requests
    await new Promise(resolve => setTimeout(resolve, 100));
  }
}

// Run the tests
runTests().catch(console.error);
