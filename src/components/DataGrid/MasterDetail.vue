<template>
    <DxTabPanel>
        <DxItem
                title="Orders"
                template="orders-tab"
        />
        <template #orders-tab>
            <OrdersTab
                    :supplier-id="masterDetailData.key"
            />
        </template>
        <DxItem
                title="Address"
                template="address-tab"
        />
        <template #address-tab>
            <AddressTab
                    :data="masterDetailData.data"
            />
        </template>
    </DxTabPanel>
</template>

<script>
import { DxTabPanel, DxItem } from 'devextreme-vue/tab-panel';

import OrdersTab from '@/components/DataGrid/OdersTab.vue';
import AddressTab from '@/components/DataGrid/AddressTab.vue';

export default {
    components: {
        DxTabPanel, DxItem, OrdersTab, AddressTab,
    },
    props: {
        masterDetailData: {
            type: Object,
        },
    },
};
</script>