const API_BASE_URL = 'https://waitlist-cos3.onrender.com';

export interface WaitlistClientData {
  firstName: string;
  lastName: string;
  email: string;
  companyOrganization: string; // Required by API
  phoneNumber: string; // Required by API - added missing field
  location: string; // Required by API
  eventTypes: string[]; // Required by API - must be an array
  eventFrequency: string; // Required by API
  excitedFeatures: string; // Required by API
  receiveUpdates: boolean; // Required by API
  betaTester: boolean; // Required by API
}

export interface WaitlistVendorData {
  firstName: string;
  lastName: string;
  email: string;
  companyOrganization: string; // Required by API
  phoneNumber: string; // Required by API - added missing field
  location: string; // Required by API
  eventTypes: string[]; // Required by API - service categories like "Catering & Drinks"
  businessSize: string; // Required by API - business size
  excitedFeatures: string; // Required by API
  receiveUpdates: boolean; // Required by API
  betaTester: boolean; // Required by API
}

export interface ApiResponse {
  success: boolean;
  message: string;
  data?: any;
}

export class WaitlistApiService {
  private static async makeRequest(endpoint: string, data: any, retries: number = 3): Promise<ApiResponse> {
    for (let attempt = 1; attempt <= retries; attempt++) {
      try {
        console.log(`Attempt ${attempt}/${retries}: Sending request to:`, `${API_BASE_URL}${endpoint}`);
        console.log('Request data:', data);

        const response = await fetch(`${API_BASE_URL}${endpoint}`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(data),
        });

        console.log('Response status:', response.status);
        console.log('Response headers:', Object.fromEntries(response.headers.entries()));

        if (!response.ok) {
          // Try to get error details from response
          let errorMessage = `HTTP error! status: ${response.status}`;
          try {
            const errorData = await response.json();
            console.log('Error response data:', errorData);
            console.log('Full error details:', JSON.stringify(errorData, null, 2));
            if (errorData.errors && Array.isArray(errorData.errors)) {
              const errorMessages = errorData.errors.map((err: any) => `${err.field}: ${err.message}`).join(', ');
              errorMessage = `Validation failed: ${errorMessages}`;
            } else if (errorData.message) {
              errorMessage = errorData.message;
            } else if (errorData.error) {
              errorMessage = errorData.error;
            }
          } catch (parseError) {
            console.log('Could not parse error response as JSON');
          }
          throw new Error(errorMessage);
        }

        const result = await response.json();
        console.log('Success response:', result);
        return result;
      } catch (error) {
        console.error(`API request failed (attempt ${attempt}/${retries}):`, error);
        
        // If this is the last attempt, throw the error
        if (attempt === retries) {
          // Provide user-friendly error messages
          if (error instanceof TypeError && error.message.includes('Failed to fetch')) {
            throw new Error('Unable to connect to the server. Please check your internet connection and try again.');
          } else if (error instanceof Error && error.message.includes('ERR_CONNECTION_CLOSED')) {
            throw new Error('Connection to the server was lost. Please try again in a moment.');
          } else if (error instanceof Error) {
            throw new Error(error.message);
          } else {
            throw new Error('An unexpected error occurred. Please try again.');
          }
        }
        
        // Wait before retrying (exponential backoff)
        const delay = Math.pow(2, attempt - 1) * 1000; // 1s, 2s, 4s
        console.log(`Waiting ${delay}ms before retry...`);
        await new Promise(resolve => setTimeout(resolve, delay));
      }
    }
    
    // This should never be reached, but just in case
    throw new Error('All retry attempts failed');
  }

  static async addClientToWaitlist(data: WaitlistClientData): Promise<ApiResponse> {
    return this.makeRequest('/api/waitlist/clients', data);
  }

  static async addVendorToWaitlist(data: WaitlistVendorData): Promise<ApiResponse> {
    return this.makeRequest('/api/waitlist/vendors', data);
  }

  static async submitFeedback(data: any): Promise<ApiResponse> {
    return this.makeRequest('/api/feedback', data);
  }

  static async checkHealth(): Promise<ApiResponse> {
    try {
      const response = await fetch(`${API_BASE_URL}/api/health`);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return await response.json();
    } catch (error) {
      console.error('Health check failed:', error);
      throw new Error(error instanceof Error ? error.message : 'Health check failed');
    }
  }

  // Test function to debug API requirements
  static async testClientEndpoint(): Promise<void> {
    const timestamp = Date.now();
    const testData = {
      firstName: 'Test',
      lastName: 'User',
      email: `test${timestamp}@example.com`, // Unique email to avoid conflicts
      companyOrganization: 'Test Company',
      phoneNumber: '+1234567890', // Added required phone number
      location: 'Test City',
      eventTypes: ['Social Events (Weddings, Birthday Parties, etc.)'], // Updated to match API specification
      eventFrequency: 'monthly',
      excitedFeatures: 'Looking forward to the platform',
      receiveUpdates: true,
      betaTester: false
    };
    
    console.log('Testing client endpoint with minimal data:', testData);
    try {
      const response = await fetch(`${API_BASE_URL}/api/waitlist/clients`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(testData),
      });
      
      console.log('Test response status:', response.status);
      const responseText = await response.text();
      console.log('Test response body:', responseText);
    } catch (error) {
      console.error('Test failed:', error);
    }
  }

  // Test function for vendor endpoint
  static async testVendorEndpoint(): Promise<void> {
    const timestamp = Date.now();
    const testData = {
      firstName: 'Test',
      lastName: 'Vendor',
      email: `vendor${timestamp}@example.com`, // Unique email to avoid conflicts
      companyOrganization: 'Test Vendor Company',
      phoneNumber: '+1987654321', // Added required phone number
      location: 'Test City',
      eventTypes: ['Catering & Drinks'], // Service categories as required by API
      businessSize: 'small business (2-10 people)', // Updated to match API specification
      excitedFeatures: 'Looking forward to the platform',
      receiveUpdates: true,
      betaTester: false
    };
    
    console.log('Testing vendor endpoint with minimal data:', testData);
    try {
      const response = await fetch(`${API_BASE_URL}/api/waitlist/vendors`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(testData),
      });
      
      console.log('Test response status:', response.status);
      const responseText = await response.text();
      console.log('Test response body:', responseText);
    } catch (error) {
      console.error('Test failed:', error);
    }
  }

  // Test function to find valid business size values
  static async testBusinessSizeValues(): Promise<void> {
    const businessSizes = [
      'solo entrepreneur', 
      'small business (2-10 people)', 
      'medium business (11-50 people)', 
      'large business (50+ people)'
    ];
    
    for (const businessSize of businessSizes) {
      const timestamp = Date.now();
      const testData = {
        firstName: 'Test',
        lastName: 'Vendor',
        email: `test${businessSize.replace(/\s+/g, '')}${timestamp}@example.com`,
        companyOrganization: 'Test Company',
        phoneNumber: '+1234567890', // Added required phone number
        location: 'Test City',
        eventTypes: ['Catering & Drinks'],
        businessSize: businessSize,
        excitedFeatures: 'Testing business size',
        receiveUpdates: true,
        betaTester: false
      };
      
      console.log(`Testing business size: "${businessSize}"`);
      try {
        const response = await fetch(`${API_BASE_URL}/api/waitlist/vendors`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(testData),
        });
        
        const responseText = await response.text();
        console.log(`Business size "${businessSize}": Status ${response.status}, Response: ${responseText}`);
        
        if (response.ok) {
          console.log(`✅ SUCCESS: "${businessSize}" is a valid business size!`);
          break; // Stop testing once we find a valid one
        }
      } catch (error) {
        console.error(`❌ Error testing business size "${businessSize}":`, error);
      }
    }
  }
}
