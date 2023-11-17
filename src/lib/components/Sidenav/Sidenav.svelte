<script lang="ts">
    import { AppRail, AppRailTile, AppRailAnchor } from '@skeletonlabs/skeleton';
    import SvgIcon from '$lib/components/SvgIcon/SvgIcon.svelte';
    import { navigationItems } from "$lib/constants/navigation";

    let currentTile: number = 0;
</script>

<AppRail>
    {#each navigationItems as { icon, name, path }, i}
        <AppRailAnchor bind:group={currentTile} name={name.toLowerCase()} value={i} title={name}>
            <svelte:fragment slot="lead">
                <SvgIcon name={icon} width="w-6" height="h-6" />
            </svelte:fragment>
            <span>{name}</span>
        </AppRailAnchor>
    {/each}
</AppRail>
