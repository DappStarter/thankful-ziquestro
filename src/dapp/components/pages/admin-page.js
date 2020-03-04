import CustomElement from '../shared/custom-element';
import '../widgets/panel-widget.js';
import '../shared/action-card.js';
import '../widgets/page-widget.js';

export default class AdminPage extends CustomElement {

    constructor(...args) {
        super([], ...args);
    }

    render() {
        let self = this;

        let uiHtml = {
            [CustomElement.UI_READ]: '',
            [CustomElement.UI_WRITE]: '',
            [CustomElement.UI_ADMIN]: ''
        }

/*>>>>>>>>>>>>>>>>>>>>>>>>>>> ACCESS CONTROL: CONTRACT RUN STATE  <<<<<<<<<<<<<<<<<<<<<<<<<<*/
        uiHtml[CustomElement.UI_ADMIN] += 
`
            <action-card 
                title="Is Contract Run State Active" description="Check if contract run state is active"
                action="isContractRunStateActive" method="${CustomElement.METHOD_GET}" fields="">
            </action-card>

            <action-card 
                title="Set Contract Run State" description="Set contract run state to active or inactive"
                action="setContractRunState" method="${CustomElement.METHOD_POST}" fields="mode">

                    <switch-widget
                        field="mode" label="Contract Run State" placeholder="">
                    </switch-widget>
                
            </action-card>
            <div class="col-12 m-5"></div>
`

/*>>>>>>>>>>>>>>>>>>>>>>>>>>> ACCESS CONTROL: ADMINISTRATOR ROLE  <<<<<<<<<<<<<<<<<<<<<<<<<<*/
        uiHtml[CustomElement.UI_ADMIN] += 
`
            <action-card
                title="Is Contract Admin" description="Check if an account is a contract administrator"
                action="isContractAdmin" method="${CustomElement.METHOD_GET}" fields="account">

                    <account-widget 
                        field="account" label="Account" placeholder="Account address">
                    </account-widget>

            </action-card>

            <action-card 
                title="Add Contract Admin" description="Add an account as a contract administrator"
                action="addContractAdmin" method="${CustomElement.METHOD_POST}" fields="account">

                    <account-widget
                        field="account" label="Account" placeholder="Account address of administrator to add">
                    </account-widget>
                
            </action-card>

            <action-card 
                title="Remove Contract Admin" description="Remove an account as a contract administrator"
                action="removeContractAdmin" method="${CustomElement.METHOD_POST}" fields="account">

                    <account-widget
                        field="account" label="Account" placeholder="Account address of administrator to remove">
                    </account-widget>
                
            </action-card>

            <action-card
                title="Remove Last Contract Admin" description="Remove an account as a contract administrator"
                action="removeLastContractAdmin" method="${CustomElement.METHOD_POST}" fields="account">

                    <h6 class="red accent-4 mb-3 p-4 text-white">
                        This transaction will remove the last remaining administrator. Any functions that use requireContractAdmin() will fail, 
                        effectively making this a fully decentralized contract. This action is irreversible. Proceed with caution.
                    </h6>

                    <account-widget
                        field="account" label="Account" placeholder="Account address of administrator to remove">
                    </account-widget>
                
            </action-card>
            <div class="col-12 m-5"></div>
`


        let content = 
`
        <page-widget title="${self.title}" category="" description="Contract administrative features">
            ${uiHtml[CustomElement.UI_ADMIN]}
        </page-widget>
        <panel-widget id="resultPanel"></panel-widget>

`
        self.innerHTML = content;
    }
}

customElements.define('admin-page', AdminPage);

