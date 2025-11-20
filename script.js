// Helper function to generate unique event ID
function generateEventId() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        const r = Math.random() * 16 | 0;
        const v = c === 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
    });
}

// Helper function to get current Unix timestamp
function getCurrentTimestamp() {
    return Math.floor(Date.now() / 1000);
}

// Event handlers for each button - push directly to dataLayer
const eventHandlers = {
    Search: function() {
        const eventData = {
            event: 'Search',
            schema_version: 'v2',
            event_type: 'rtgconv',
            event_time: getCurrentTimestamp(),
            event_id: generateEventId(),
            event_data: {
                sem_id: 'Sem24921z457k',
                consent: 1,
                contents: [{
                    'id': 'BTS-94365',
                    'quantity': 2,
                    'product_name': 'Adidas Ultraboost',
                    'unit_price': 4499
                }],
                content_category: 'Obuv | Bežecká obuv',
                search_string: 'běžecké boty',
                num_items: 15,
                value: 8998,
                currency: 'CZK',
            }
        };

        window.dataLayer.push(eventData);
        console.log('dataLayer.push:', eventData);
    },

    ViewContent: function() {
        const eventData = {
            event: 'ViewContent',
            schema_version: 'v2',
            event_type: 'rtgconv',
            event_time: getCurrentTimestamp(),
            event_id: generateEventId(),
            event_data: {
                sem_id: 'Sem24921z457k',
                consent: 1,
                contents: [{
                    'id': 'BTS-94365',
                    'quantity': 1,
                    'product_name': 'Adidas Ultraboost',
                    'unit_price': 4499
                }],
                content_name: 'Bežecké boty Adidas Ultraboost',
                content_category: 'Obuv | Bežecká obuv',
                content_type: 'product',
                value: 4499,
                currency: 'CZK',
            }
        };

        window.dataLayer.push(eventData);
        console.log('dataLayer.push:', eventData);
    },

    AddToWishlist: function() {
        const eventData = {
            event: 'AddToWishlist',
            schema_version: 'v2',
            event_type: 'rtgconv',
            event_time: getCurrentTimestamp(),
            event_id: generateEventId(),
            event_data: {
                sem_id: 'Sem24921z457k',
                consent: 1,
                contents: [{
                    'id': 'BTS-94365',
                    'quantity': 1,
                    'product_name': 'Adidas Ultraboost',
                    'unit_price': 4499
                }],
                content_name: 'Bežecké boty Adidas Ultraboost',
                content_category: 'Obuv | Bežecká obuv',
                value: 4499,
                currency: 'CZK'
            }
        };

        window.dataLayer.push(eventData);
        console.log('dataLayer.push:', eventData);
    },

    AddToCart: function() {
        const eventData = {
            event: 'AddToCart',
            schema_version: 'v2',
            event_type: 'rtgconv',
            event_time: getCurrentTimestamp(),
            event_id: generateEventId(),
            event_data: {
                sem_id: 'Sem24921z457k',
                consent: 1,
                contents: [{
                    'id': 'BTS-94365',
                    'quantity': 2,
                    'product_name': 'Adidas Ultraboost',
                    'unit_price': 4499
                }],
                content_name: 'Bežecké boty Adidas Ultraboost',
                content_category: 'Obuv | Bežecká obuv',
                value: 8998,
                currency: 'CZK'
            }
        };

        window.dataLayer.push(eventData);
        console.log('dataLayer.push:', eventData);
    },

    InitiateCheckout: function() {
        const eventData = {
            event: 'InitiateCheckout',
            schema_version: 'v2',
            event_type: 'rtgconv',
            event_time: getCurrentTimestamp(),
            event_id: generateEventId(),
            event_data: {
                sem_id: 'Sem24921z457k',
                consent: 1,
                contents: [{
                    'id': 'BTS-94365',
                    'quantity': 2,
                    'product_name': 'Adidas Ultraboost',
                    'unit_price': 4499
                }],
                content_name: 'Bežecké boty Adidas Ultraboost',
                content_category: 'Obuv | Bežecká obuv',
                value: 8998,
                currency: 'CZK'
            }
        };

        window.dataLayer.push(eventData);
        console.log('dataLayer.push:', eventData);
    },

    AddPaymentInfo: function() {
        const eventData = {
            event: 'AddPaymentInfo',
            schema_version: 'v2',
            event_type: 'rtgconv',
            event_time: getCurrentTimestamp(),
            event_id: generateEventId(),
            event_data: {
                sem_id: 'Sem24921z457k',
                consent: 1,
                contents: [{
                    'id': 'BTS-94365',
                    'quantity': 2,
                    'product_name': 'Adidas Ultraboost',
                    'unit_price': 4499
                }],
                content_name: 'Bežecké boty Adidas Ultraboost',
                content_category: 'Obuv | Bežecká obuv',
                value: 8998,
                currency: 'CZK'
            }
        };

        window.dataLayer.push(eventData);
        console.log('dataLayer.push:', eventData);
    },

    CompleteRegistration: function() {
        const eventData = {
            event: 'CompleteRegistration',
            schema_version: 'v2',
            event_type: 'rtgconv',
            event_time: getCurrentTimestamp(),
            event_id: generateEventId(),
            event_data: {
                sem_id: 'Sem24921z457k',
                consent: 1,
                content_name: 'Registrace do newsletteru',
                value: 0,
                currency: 'CZK',
            }
        };

        window.dataLayer.push(eventData);
        console.log('dataLayer.push:', eventData);
    },

    Contact: function() {
        const eventData = {
            event: 'Contact',
            schema_version: 'v2',
            event_type: 'rtgconv',
            event_time: getCurrentTimestamp(),
            event_id: generateEventId(),
            event_data: {
                sem_id: 'Sem24921z457k',
                consent: 1,
                value: 0,
                currency: 'CZK',
                contact_method: 'phone_call'
            }
        };

        window.dataLayer.push(eventData);
        console.log('dataLayer.push:', eventData);
    },

    CustomizeProduct: function() {
        const eventData = {
            event: 'CustomizeProduct',
            schema_version: 'v2',
            event_type: 'rtgconv',
            event_time: getCurrentTimestamp(),
            event_id: generateEventId(),
            event_data: {
                sem_id: 'Sem24921z457k',
                consent: 1,
                contents: [{
                    'id': 'BTS-94365',
                    'quantity': 2,
                    'product_name': 'Adidas Ultraboost',
                    'unit_price': 4499
                }],
                content_type: 'product',
                value: 8998,
                currency: 'CZK',
                customization_type: 'engraving'
            }
        };

        window.dataLayer.push(eventData);
        console.log('dataLayer.push:', eventData);
    },

    Donate: function() {
        const eventData = {
            event: 'Donate',
            schema_version: 'v2',
            event_type: 'rtgconv',
            event_time: getCurrentTimestamp(),
            event_id: generateEventId(),
            event_data: {
                sem_id: 'Sem24921z457k',
                consent: 1,
                value: 500,
                currency: 'CZK',
                donation_type: 'jednorázový'
            }
        };

        window.dataLayer.push(eventData);
        console.log('dataLayer.push:', eventData);
    },

    FindLocation: function() {
        const eventData = {
            event: 'FindLocation',
            schema_version: 'v2',
            event_type: 'rtgconv',
            event_time: getCurrentTimestamp(),
            event_id: generateEventId(),
            event_data: {
                sem_id: 'Sem24921z457k',
                consent: 1,
                value: 0,
                currency: 'CZK',
                location_id: 'praha-centrum'
            }
        };

        window.dataLayer.push(eventData);
        console.log('dataLayer.push:', eventData);
    },

    Lead: function() {
        const eventData = {
            event: 'Lead',
            schema_version: 'v2',
            event_type: 'rtgconv',
            event_time: getCurrentTimestamp(),
            event_id: generateEventId(),
            event_data: {
                sem_id: 'Sem24921z457k',
                consent: 1,
                value: 0,
                currency: 'CZK',
                content_name: 'Žádost o testovací produkt'
            }
        };

        window.dataLayer.push(eventData);
        console.log('dataLayer.push:', eventData);
    },

    Purchase: function() {
        const eventData = {
            event: 'Purchase',
            schema_version: 'v2',
            event_type: 'rtgconv',
            event_time: getCurrentTimestamp(),
            event_id: generateEventId(),
            event_data: {
                sem_id: 'Sem24921z457k',
                consent: 1,
                order_id: 'ABC123',
                contents: [{
                    'id': 'BTS-94365',
                    'quantity': 1,
                    'product_name': 'Adidas Ultraboost',
                    'unit_price': 4499
                }],
                value: 4499,
                currency: 'CZK',
                content_type: 'product',
            }
        };

        window.dataLayer.push(eventData);
        console.log('dataLayer.push:', eventData);
    },

    Schedule: function() {
        const eventData = {
            event: 'Schedule',
            schema_version: 'v2',
            event_type: 'rtgconv',
            event_time: getCurrentTimestamp(),
            event_id: generateEventId(),
            event_data: {
                sem_id: 'Sem24921z457k',
                consent: 1,
                value: 0,
                currency: 'CZK',
                appointment_type: 'konzultace'
            }
        };

        window.dataLayer.push(eventData);
        console.log('dataLayer.push:', eventData);
    },

    StartTrial: function() {
        const eventData = {
            event: 'StartTrial',
            schema_version: 'v2',
            event_type: 'rtgconv',
            event_time: getCurrentTimestamp(),
            event_id: generateEventId(),
            event_data: {
                sem_id: 'Sem24921z457k',
                consent: 1,
                value: 0,
                currency: 'CZK',
                trial_type: '30 dní zdarma'
            }
        };

        window.dataLayer.push(eventData);
        console.log('dataLayer.push:', eventData);
    },

    SubmitApplication: function() {
        const eventData = {
            event: 'SubmitApplication',
            schema_version: 'v2',
            event_type: 'rtgconv',
            event_time: getCurrentTimestamp(),
            event_id: generateEventId(),
            event_data: {
                sem_id: 'Sem24921z457k',
                consent: 1,
                value: 0,
                currency: 'CZK',
                content_name: 'Žádost o zaměstnání'
            }
        };

        window.dataLayer.push(eventData);
        console.log('dataLayer.push:', eventData);
    },

    Subscribe: function() {
        const eventData = {
            event: 'Subscribe',
            schema_version: 'v2',
            event_type: 'rtgconv',
            event_time: getCurrentTimestamp(),
            event_id: generateEventId(),
            event_data: {
                sem_id: 'Sem24921z457k',
                consent: 1,
                value: 299.99,
                currency: 'CZK',
                subscription_type: 'měsíční'
            }
        };

        window.dataLayer.push(eventData);
        console.log('dataLayer.push:', eventData);
    },

    PageView: function() {
        const eventData = {
            event: 'PageView',
            schema_version: 'v2',
            event_type: 'rtgconv',
            event_time: getCurrentTimestamp(),
            event_id: generateEventId(),
            event_data: {
                sem_id: 'Sem24921z457k',
                consent: 1,
            }
        };

        window.dataLayer.push(eventData);
        console.log('dataLayer.push:', eventData);
    }
};

// Initialize event listeners when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    const eventButtons = document.querySelectorAll('.event-btn');

    eventButtons.forEach(button => {
        button.addEventListener('click', function() {
            const eventName = this.getAttribute('data-event');

            // Add visual feedback
            this.classList.add('clicked');
            setTimeout(() => {
                this.classList.remove('clicked');
            }, 500);

            // Call the corresponding event handler
            if (eventHandlers[eventName]) {
                eventHandlers[eventName]();
            } else {
                console.error('Event handler not found for:', eventName);
            }
        });
    });

    // Log initialization
    console.log('%c Trigger Happy GTM Testing Playground Initialized ', 'background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; font-weight: bold; padding: 8px; border-radius: 4px;');
    console.log('18 event buttons ready - Events push directly to dataLayer');
    console.log('GTM Container ID: GTM-5SFZ54KS');
    console.log('Your GTM template will handle the sem() logic');
});
