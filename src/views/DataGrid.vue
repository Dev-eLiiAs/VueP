<template>
    <h2 class="mb-3 font-bold text-center tracking-tight text-black sm:text-6xl">Consulte los datos</h2>
    <DxDataGrid
            id="gridContainer"
            :data-source="suppliersData"
            :remote-operations="true"
            :show-borders="true"
    >
        <DxPaging :page-size="15"/>

        <DxColumn data-field="ContactName"/>
        <DxColumn data-field="ContactTitle"/>
        <DxColumn data-field="CompanyName"/>
        <DxColumn data-field="City"/>
        <DxColumn data-field="Country"/>
        <DxMasterDetail
                :enabled="true"
                template="master-detail"
        />
        <template #master-detail="{ data }">
            <MasterDetail :master-detail-data="data"/>
        </template>
    </DxDataGrid>
</template>

<script>
import {
    DxDataGrid,
    DxColumn,
    DxPaging,
    DxMasterDetail,
} from 'devextreme-vue/data-grid';

import { createStore } from 'devextreme-aspnet-data-nojquery';
import MasterDetail from '@/components/DataGrid/MasterDetail.vue';

const url = 'https://js.devexpress.com/Demos/Mvc/api/DataGridAdvancedMasterDetailView';

export default {
    components: {
        DxDataGrid,
        DxColumn,
        DxPaging,
        DxMasterDetail,
        MasterDetail,
    },
    data() {
        return {
            suppliersData: createStore({
                key: 'SupplierID',
                loadUrl: `${url}/GetSuppliers`,
            }),
        };
    },
};
</script>


<style>
@import url('https://fonts.googleapis.com/css2?family=Poppins&display=swap');
* {
    font-family: Poppins, sans-serif;
}
</style>